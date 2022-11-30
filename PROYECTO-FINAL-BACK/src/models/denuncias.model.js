const {model, Schema} = require('mongoose')

const denunciasSchema = new Schema({
    matricula: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    detalles: {
        type: String,
        required: true
    }, 
    fecha : {
        type: String,
        required: true
    }
})

module.exports = model("Denuncias",denunciasSchema);