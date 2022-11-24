import * as argon from "argon2";
import generate_jwt from "../helpers/generate_jwt.js";
import User from "../models/user.models.js";

export const loginUser = async (req, res) => {
  try {
    const user = await User.findById(req.usuario.id).select("-password");
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    //Se busca al usuario segun las credenciales recibidas...
    const user = await User.findOne({ username });
    console.log(user);

    //Verifica si el usuario esta registrado en la BD...
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "error al autenticarse - usuraio no encontrado",
      });
    }

    //Verifica si el usuario esta activo...
    if (!user.active) {
      return res.status(400).json({
        ok: false,
        msg: "error al autenticarse - usuraio inactivo",
      });
    }

    //verificar la contraseña...
    const validPassword = await argon.verify(user.password, password);

    //Se valida la contraseña
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Error al autenticarse - Contraseña incorrecta",
      });
    }

    // Generación del token de autenticación...
    const token = await generate_jwt({ uid: user._id });

    return res.json({
      token,
    });
  } catch (error) {
    // return res.json({ msg: "Error al iniciar sesión", error });
    console.log(error);
  }
};
