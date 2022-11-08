const {model, Schema} = require('mongoose')

const adminSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    estado: {
        type: Boolean,
        default: true
    }
})

adminSchema.methods.toJSON = function() {
    const { _id, ...admin} = this.toObject();
    admin.uid = _id;

    return admin;
}
module.exports = model('Admins', adminSchema)