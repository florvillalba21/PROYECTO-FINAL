const {model, Schema} = require('mongoose')

const brandsSchema = new Schema({
    descripcion: {
        type : String,
        required : true
    }
})

brandsSchema.methods.toJSON = function() {
    const { _id, ...brand} = this.toObject();
    brand.uid = _id;

    return brand;
}

module.exports = model('Marcas', brandsSchema)