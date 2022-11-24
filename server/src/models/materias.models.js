import { model, Schema } from "mongoose";

/* Datos de las materias a dictarse... */
const MateriaSchema = new Schema({
  _id: Schema.Types.ObjectId,
  nombre: { type: String, required: true },
  carrera: [{ type: Schema.Types.ObjectId, ref: "Carreras" }],
  profTitular: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  profAuxiliar: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  horasCatedra: { type: Number, reuired: true },
});

export default model("Materias", MateriaSchema);
