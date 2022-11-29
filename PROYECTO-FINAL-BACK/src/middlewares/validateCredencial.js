const Admins = require('../models/admins.model')

const validateUsername = async (value)=>{
    const username = await Admins.findOne({credencial: value})

    if(username){
        throw new Error('ha ocurrido un error en registrar el usuario - usuario existente');
    }
    return true;
}

module.exports = validateUsername;