const { model, Schema } = require("mongoose");

const carSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  matricula: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  marca: {
    type: Schema.Types.ObjectId,
    ref: "Marcas",
  },
  color: {
    type: Schema.Types.ObjectId,
    ref: "Colores",
  },
  motor: {
    type: String,
    required: true,
  },
  titular: {
    type: Schema.Types.ObjectId,
    ref: "Titulares",
  }
});

module.exports= model('Automoviles', carSchema)
