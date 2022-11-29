const {model, Schema}= require('mongoose')

const carsSchema = new Schema({
    matricula: {
        type: String,
        required: true
    },
    titular: {
        type:String,
        required: true
    },
    cedula: {
        type: Boolean,
        required: true
    },
    carnet: {
        type: Boolean,
        required: true
    }, 
    seguro: {
        type: Boolean,
        required: true
    },
    servis: {
        type: Boolean,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    }
})



module.exports = model ('cars', carsSchema)