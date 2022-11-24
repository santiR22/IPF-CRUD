// Importacion de las librerias requeridas...
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import fileUpload from "express-fileupload";

// Importacion de las rutas...
import { Routes } from "./src/routes/Routes.js";

// Se almacena el componente "express" en la constante...
const app = express();

// Implementando Middlewares...
app.use(urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(json());
app.use(helmet());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./tmp",
  })
);

// Routes...
app.use("/api", Routes());

export default app;
