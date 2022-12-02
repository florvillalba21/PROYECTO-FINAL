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
    licencia: {
        type: Boolean,
    }, 
    seguro: {
        type: Boolean,

    },
    RTO: {
        type: Boolean,

    },
    
})



module.exports = model ('cars', carsSchema)