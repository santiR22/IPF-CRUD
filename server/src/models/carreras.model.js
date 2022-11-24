import { model, Schema } from "mongoose";


const CarreraSchema = new Schema({
  _id: Schema.Types.ObjectId,
  nombre: { type: String, required: true },
  duracion: { type: Number, required: true },
});

export default model("Carreras", CarreraSchema);
