import User from "../models/user.models.js";
import * as argon from "argon2";

//MOSTRAR TODOS LOS USUARIOS...
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//MOSTRAR SOLO UN USUARIO...
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) return res.sendStatus(404).json({ msg: "El usuario no existe" });
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//AÑADIR UN NUEVO USUSARIO...
export const createUser = async (req, res) => {
  const { username, password } = req.body;

  //Se valida el tipo de rol que tendrá el usuario...
  // let userRole = false;
  // const { alumno, profesor, administrador } = role;

  // if (alumno) {
  //   userRole = { alumno: true };
  // }

  // if (profesor) {
  //   userRole = { profesor: true };
  // }

  // if (administrador) {
  //   userRole = { administrador: true };
  // }

  //Se crea el nuevo usuario...
  try {
    //La contraseña pasa a ser encriptada...
    const passwordHashed = await argon.hash(password);
    const newUser = new User({
      username,
      password: passwordHashed,
    });

    await newUser.save();
    return res.json(newUser);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

//ACTUALIZAR DATOS DEL USUARIO...
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );

    return res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};

//ELIMINAR USUARIO...
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    return res.status(200).json({
      msg: "usuario eliminado",
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};
