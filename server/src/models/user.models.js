import { model, Schema } from "mongoose";

/* Modelo de datos utilizado para 
registrarse e iniciar sesion en el sistema... */

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    // email: {
    //   type: String,
    //   required: true,
    // },

    // role: {
    //   alumno: { type: Boolean, default: false },
    //   profesor: { type: Boolean, default: false },
    //   administrador: {
    //     type: Boolean,
    //     default: false,
    //   },
    // },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("User", UserSchema);
