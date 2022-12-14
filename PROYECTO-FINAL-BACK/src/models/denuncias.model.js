const {model, Schema} = require('mongoose')

const denunciasSchema = new Schema({
    inspector: {
        type: String,
        required: true
    },
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
    cedula: {
        type: Boolean
    },
    RTO: {
        type: Boolean
    },
    seguro: {
        type: Boolean
    },
    licencia: {
        type: Boolean
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