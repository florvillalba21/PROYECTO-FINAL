const Admin = require('../models/admins.model')
const generateT = require('../helpers/generateJWT');
const bcrypt = require('bcrypt')
const ctrlAdmin = {}


ctrlAdmin.postAdmin = async (req, res)=> {
    const {username, password: passRecibida} = req.body
    const passEncriptada = bcrypt.hashSync(passRecibida, 10)

    const newAdmin = new Admin({
        username,
        password: passEncriptada
    });

    const admin = await newAdmin.save()

    return res.json({
        msg: "usuario cargado correctamente",
        admin
    })

}

ctrlAdmin.getAdmin = async(req, res) =>{
    const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({
        ok: false,
        msg: "Ha ocurrido un error :c" - "Usuario no encontrado",
      });
    }

    if (!admin.isActive) {
      return res.status(400).json({
        ok: false,
        msg: "ha ocurrido un error fatal :o" - "Usuario inactivo",
      });
    }

    const validarPassword = bcrypt.compareSync(password, admin.password);

    if (!validarPassword) {
      return res.status(400).json({
        ok: false,
        msg: "ha ocurrido un error fatal :o" - "Contraseña incorrecta",
      });
    }

    const token = await generateT({ uid: admin._id });
    return res.json({ token });
    

  } catch (error) {
    console.log(error)
    return res.json({ msg: 'Error al iniciar sesión' });
  }
};

module.exports = ctrlAdmin;
