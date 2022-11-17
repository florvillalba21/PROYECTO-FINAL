const {model, Schema}= require('mongoose')

const carsSchema = new Schema({
    matricula: {
        type: String,
        required: true
    }
})



module.exports = model ('cars', carsSchema)