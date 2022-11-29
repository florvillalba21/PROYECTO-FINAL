const Admin = require("../models/admins.model");
const generateT = require("../helpers/generateJWT");
const bcrypt = require("bcrypt");
const ctrlAdmin = {};

ctrlAdmin.postAdmin = async (req, res) => {
  const { nombre, apellido, credencial, password: passRecibida } = req.body;
  const passEncriptada = bcrypt.hashSync(passRecibida, 10);

  const newAdmin = new Admin({
    nombre,
    apellido,
    credencial,
    password: passEncriptada,
  });

  const admin = await newAdmin.save();

  return res.json({
    msg: "usuario cargado correctamente",
    admin,
  });
};

ctrlAdmin.getAdmin = async (req, res) => {
  const { nombre, apellido, credencial, password } = req.body;

  try {
    const admin = await Admin.findOne({ credencial });
    console.log(admin);
    if (!admin) {
      return res.status(400).json({
        ok: false,
        msg: "Ha ocurrido un error :c" - "Usuario no encontrado",
      });
    }

    if (!admin.estado) {
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
    console.log(error);
    return res.json({ msg: "Error al iniciar sesión" });
  }
};

ctrlAdmin.putAdmin = async (req, res) => {
  const userId = req.user;
  const { passActual, passNueva, passRep } = req.body;

  try {
    // const admin = await Admin.findOne({ _id });
    // if (!admin) {
    //   return res.status(400).json({
    //     ok: false,
    //     msg: "ha ocurrido un error fatal :o" - "admin inexistente",
    //   });
    // }

    if(passNueva != passRep){
      return res.status(400).json({
        ok: false,
        msg: "ha ocurrido un error fatal :o" - "las contraseñas no son iguales",
      });
    }
    const passUpdate = await Admin.findByIdAndUpdate(userId, passNueva, {new:true} )

    return res.json({
      msg: "Usuario actualizado :)",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "no se ha podido actualizar :c",
    });
  }
};

module.exports = ctrlAdmin;
