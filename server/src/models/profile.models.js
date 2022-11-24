import { model, Schema } from "mongoose";

/* Datos adicioneles del ususario, 
junto con su rol correspondiente... */

const ProfileSchema = new Schema({
  nombre: { type: String, required: true, trim: true },
  apellido: { type: String, required: true, trim: true },
  dni: { type: Number, required: true, trim: true },
  edad: { type: Number, required: true, trim: true },
  direccion: {
    calle: { type: String, required: true, trim: true },
    altura: { type: Number, required: true, trim: true },
    localidad: { type: String, required: true, trim: true },
  },
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  rol: { type: String, required: true, default: "common-user" },
});

export default model("Profile", ProfileSchema);
