import { model, Schema } from "mongoose";

const AsistenciaSchema = new Schema({
  asistencia: [
    {
      fecha: { type: Date },
      user: [{ type: Schema.Types.ObjectId, ref: "User" }],
      asistencia: { type: Boolean },
    },
  ],
});

export default model("Asistencias", AsistenciaSchema);
