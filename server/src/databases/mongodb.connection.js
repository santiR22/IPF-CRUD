// Conexion a la base de datos MongoDB mediante la libreria "mongoose"...

import mongoose from "mongoose";
import { MONGODB_URI } from "../config/config.js";

export const connectDB = async () => {
  try {
    await mongoose
      .connect(MONGODB_URI)
      .then(console.log("DATABASE CONNECTED!"));
  } catch (error) {
    console.error("No se ha podido establecer la conexion: ", error);
  }
};
