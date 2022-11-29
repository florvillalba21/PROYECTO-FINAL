const {model, Schema} = require('mongoose')

const denunciasSchema = new Schema({
    matricula: {
        type: Number,
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
    }
})