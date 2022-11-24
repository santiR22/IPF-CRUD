import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";
import User from "../models/user.models.js";

export const validar_jwt = async (req, res, next) => {
  const token = req.header("token");
  console.log(token);
  //verifica si el token esta en el header para aprobar el ingreso...
  if (!token) {
    return res.status(401).json({ message: "EL token no esta en el header" });
  }

  //si el token existe entonces...
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    console.log(id.uid);
    //si el id no tiene el permiso se niega el ingreso
    if (!id.uid) {
      return res
        .status(401)
        .json({ message: "No tiene permiso para ingresar" });
    }

    //buscamos el usuario en la BaseDeDatos
    const usuario = await User.findById(id.uid);

    if (!usuario) {
      return res.status(401).json({ message: "usuario no existe" });
    }

    req.usuario = usuario;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "El token es invalido",
    });
  }
};
