import { check, param } from "express-validator";
import { validarCampos } from "../helpers/validarCampos.js";
import { ExisteEmail } from "./validar_email.js";

export const getUsersAuth = [validarCampos];

export const authUser = [
  param("id").isMongoId().withMessage("El id del usuario no es valido"),
];

export const validarUsers = [
  check("username")
    .exists()
    .not()
    .isEmpty()
    .withMessage("el nombre de usuario es requerido"),

  // check("email")
  //   .exists()
  //   .not()
  //   .isEmpty()
  //   .withMessage("el email no puede quedar en blanco")
  //   .isEmail()
  //   .withMessage("el email ingresado no es valido"),
  // .custom(ExisteEmail),

  check("password")
    .exists()
    .not()
    .isEmpty()
    .withMessage("la contrasenia es obligatoria")
    .isString()
    .withMessage("contrasenia mal ingresada")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener como minimo 6 caracteres"),

  validarCampos,
];
