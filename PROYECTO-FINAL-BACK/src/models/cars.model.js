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
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    cedula: {
        type: Boolean,
        default: true
    },
    carnet: {
        type: Boolean,
        default: true
    }, 
    seguro: {
        type: Boolean,
        default: true
    },
    servis: {
        type: Boolean,
        default: true
    },
    
})



module.exports = model ('cars', carsSchema)