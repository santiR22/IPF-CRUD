import { Schema } from "mongoose";

/* Resultados del examen: fecha en la que se dictó, 
junto con su nota y el almno al que corrsponde la nota... */

const ExamenSchema = new Schema({
  fecha: { type: Date, default: Date.now() },
  alumno: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  materia: [{ type: Schema.Types.ObjectId, ref: "Materias" }],
  nota: { type: Number },
});

export default model("Examen", ExamenSchema);
