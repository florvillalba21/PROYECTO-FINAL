const {model, Schema} = require('mongoose')

const adminSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    credencial: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    estado: {
        type: Boolean,
        default: true
    },
    rol :{
        type: String,
        required: true
    }
})

adminSchema.methods.toJSON = function() {
    const { _id, ...admin} = this.toObject();
    admin.uid = _id;

    return admin;
}
module.exports = model('Admins', adminSchema)