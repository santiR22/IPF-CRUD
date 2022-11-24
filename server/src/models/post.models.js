import { Schema, model } from "mongoose";

/* Modelado para las publicaciones,
incluye subida de imagenes mediante el servicio "Cloudinary"... */

const postSchema = new Schema({
  autorNombre: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  titulo: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  imagen: {
    url: String,
    public_id: String,
  },
  fecha: {
    type: Date,
    default: Date.now(),
  },
  comentarios: [
    {
      autor: { type: Schema.Types.ObjectId, ref: "User" },
      descripcion: { type: String },
      fechaComentario: { type: Date, default: Date.now() },
    },
    {
      timestamps: true,
    },
  ],
});

export default model("Post", postSchema);
