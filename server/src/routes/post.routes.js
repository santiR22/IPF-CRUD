import { Router } from "express";
import {
  createPost,
  deleteComentarios,
  deletePost,
  getComentarios,
  getPost,
  getPosts,
  postComentarios,
  updatePost,
} from "../controllers/post.controllers.js";
import { validar_jwt } from "../middlewares/validar_jwt.js";

const router = Router();

//Rutas para las publicaciones...
router.get("/get-posts", getPosts);
router.get("/get-post/:id", getPost);
router.post("/create-post", createPost);
router.put("/update-post/:id", updatePost);
router.delete("/delete-post/:id", deletePost);

//Rutas para los comentarios...
router.post("/comentar/:id", validar_jwt, postComentarios);
router.get("/ver-comentarios/:id", validar_jwt, getComentarios);
router.delete(
  "/eliminar-comentario/comment/:id/:comment_id",
  validar_jwt,
  deleteComentarios
);

export default router;
