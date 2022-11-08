const {model, Schema} = require('mongoose')

const licenseSchema = new Schema({
    tipo: {
        type: String,
        required: true
    },
    subclase: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
})
licenseSchema.methods.toJSON = function() {
    const { _id, ...licenseClass} = this.toObject();
    licenseClass.uid = _id;

    return licenseClass;
}

module.exports= model('ClasesLicencia', licenseSchema)