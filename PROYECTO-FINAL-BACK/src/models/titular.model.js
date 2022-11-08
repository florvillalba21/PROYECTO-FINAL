const { model, Schema } = require("mongoose");

const titularSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  cuil: {
    type: Number,
    required: true,
  },
  sexo: {
    type: Schema.Types.ObjectId,
    ref: "Generos",
  },
  tipoLicencia: {
    type: Schema.Types.ObjectId,
    ref: "ClasesLicencias",
  }
});
titularSchema.methods.toJSON = function() {
    const { _id, ...titular} = this.toObject();
    titular.uid = _id;

    return titular;
}
module.exports = model('Titulares', titularSchema)
