// Importación del componente "Router" desde la libreria "express"...
import { Router } from "express";

// Importación de los controladores (lógica a ejecutar en los endpoints)...
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controllers.js";

import { login, loginUser } from "../controllers/login.controllers.js";
import {
  authUser,
  getUsersAuth,
  validarUsers,
} from "../middlewares/validarUser.js";
import { validar_jwt } from "../middlewares/validar_jwt.js";

// Se inicializa el componente "Router"...
const router = Router();

/* A cada una de las rutas se le asigna 
su correspondiente controlador... */

router.post("/login", login); //iniciar sesion...
router.get("/loginUser", validar_jwt, loginUser); //usuario loggeado...
router.get("/get-user/:id", /* validar_jwt, */ authUser, getUser); //mostrar un usuario especifico...
router.get("/get-users", /* validar_jwt, */ getUsersAuth, getUsers); //mostrar todos los usuarios...
router.post("/create-user", /* validar_jwt,*/ validarUsers, createUser); //añadir nuevo usuario...
router.put("/update-user", /* validar_jwt, */ updateUser); //actualizar datos del usuario...
router.delete("/delete-user/:id", /* validar_jwt, */ deleteUser); //eliminar usuario...

export default router;
