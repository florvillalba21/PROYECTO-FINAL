const {model, Schema}= require('mongoose')

const colorSchema = new Schema({
    descripcion: {
        type: String,
        required: true
    }
})

colorSchema.methods.toJSON = function() {
    const { _id, ...color} = this.toObject();
    color.uid = _id;

    return color;
}

module.exports = modal ('Colores', colorSchema)