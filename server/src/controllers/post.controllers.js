import fs from "fs-extra";
import { deleteImage, uploadImage } from "../libs/cloudinary.js";
import Post from "../models/post.models.js";

//Mostrar todas las publicaciones existentes...
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("autorNombre", ["username"])
      .populate("comentarios.autor", ["username"]);

    res.json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Mostar una publicacion en especifico...
export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) return res.sendStatus(404);
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Crear una nueva publicacion...
export const createPost = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    // const autorNombre = req.usuario._id;
    let imagen = null;
    if (req.files?.imagen) {
      const result = await uploadImage(req.files.imagen.tempFilePath);
      await fs.remove(req.files.imagen.tempFilePath);
      imagen = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    const newPost = new Post({
      // autorNombre,
      titulo,
      descripcion,
      imagen,
    });

    await newPost.save();
    return res.json(newPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    /* si desea cambiar la imagen actual, 
    la nueva imagen se subira a cloudinary... */
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);

      // Se añade la nueva imagen al req.body...
      body.image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );

    return res.json(updatedPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) return res.sendStatus(404);

    if (deletedPost.imagen.public_id) {
      await deleteImage(deletedPost.imagen.public_id);
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getComentarios = async (req, res) => {
  const { id } = req.params;

  const publicacion = await Post
    .findById(id)
    .populate("comentarios.autor", ["username"]);

  if (!publicacion) {
    res.status(404).json({ msg: "No existe la publicacion" });
  }
  // Respuesta del servidor
  res.json(publicacion.comentarios);
};

export const postComentarios = async (req, res) => {
  const { id } = req.params;

  const publicacion = await Post.findById(id);

  if (!publicacion) {
    res.status(404).json({ msg: "No existe la publicacion" });
  }

  const { descripcion } = req.body;

  const autor = req.usuario._id;

  const nuevoComentario = {
    autor,
    descripcion,
  };
  //console.log(publicacion)
  publicacion.comentarios.unshift(nuevoComentario);

  await publicacion.save();

  res.json(publicacion.comentarios);
};

export const deleteComentarios = async (req, res) => {
  const { id } = req.params;

  try {
    const publicacion = await Post.findById(id);

    if (!publicacion)
      return res.status(404).json({ msg: "La Publicacion No Existe" });

    const comentario = await publicacion.comentarios.find(
      (comentario) => comentario.id === req.params.comment_id
    );

    if (!comentario)
      return res.status(404).json({ msg: "El comentario no existe" });

    function removeIndex(list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === req.params.comment_id) {
          return i;
        }
      }
    }

    const remove = removeIndex(publicacion.comentarios);
    publicacion.comentarios.splice(remove, 1);

    await publicacion.save(publicacion);
    return res.json(publicacion.comentarios);
  } catch (error) {
    // Si ocurre un error
    console.log("Error al eliminar el comentario: ", error);
  }
};