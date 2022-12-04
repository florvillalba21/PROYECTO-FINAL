
const jwt = require('jsonwebtoken');
const Admins = require('../models/admins.model');

const validateJWT = async (req, res, next) => {
    // let token = req.headers.authorization;

    let token = req.headers.authorization
    console.log(token)
    
    if (!token) {
        return res.status(401).json({
            msg: 'Error de autenticación - No hay token en la petición',
            token
        })
    };
    


    try {
        const { credencial } = jwt.verify(token, process.env.SECRET)
        const admin = await Admins.findOne({credencial: credencial})
        

        if (!admin) {
            return res.status(401).json({
                ok: false,
                error: ' usuario no existe en BD'
            });
        }

        
        if (!admin.isActive) {
            return res.status(401).json({
                ok: false,
                msg: ' usuario con estado false'
            });
        }

        // Se añade la información del usuario al request para que pueda ser utilizada en el resto de middlwares
        req.admin = admin;

        
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Error de autenticación - Token no válido'
        })
    }
}

module.exports = validateJWT;