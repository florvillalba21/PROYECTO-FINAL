const Admin = require("../models/admins.model");
const generateT = require("../helpers/generateJWT");
const bcrypt = require("bcrypt");
const ctrlAdmin = {};

ctrlAdmin.postAdmin = async (req, res) => {
  const {
    nombre,
    apellido,
    credencial,
    password: passRecibida,
    rol,
  } = req.body;

  const existAdmin = await Admin.findOne({ credencial: credencial });
  if (existAdmin) {
    return res.json({
      ok: false,
      msg: "administrador existente",
    });
  }

  const passEncriptada = bcrypt.hashSync(passRecibida, 10);

  const newAdmin = new Admin({
    nombre,
    apellido,
    credencial,
    password: passEncriptada,
    rol,
  });

  const admin = await newAdmin.save();

  return res.json({
    ok: true,
    msg: "usuario cargado correctamente",
    admin,
  });
};

ctrlAdmin.loginAdmin = async (req, res) => {
  const { credencial, password } = req.body;

  try {
    const admin = await Admin.findOne({ credencial });

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
    return res.json({ ok: true, token, rol: admin.rol, admin });
  } catch (error) {
    console.log(error);
    return res.json({ msg: "Error al iniciar sesión" });
  }
};

ctrlAdmin.getAdmin = async (req, res) => {
  const id = req.admin;
  try {
    const resAdmin = await Admin.findById(id);

    if (!resAdmin) {
      return res.status(400).json({
        ok: false,
        msg: "Ha ocurrido un error :c" - "Usuario no encontrado",
      });
    }

    if (!resAdmin.estado) {
      return res.status(400).json({
        ok: false,
        msg: "ha ocurrido un error fatal :o" - "Usuario inactivo",
      });
    }
    return res.json({ ok: true, resAdmin });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

ctrlAdmin.putAdmin = async (req, res) => {
  const userId = req.admin;
  const { passActual, passNueva, passRep } = req.body;

  const admin = await Admin.findById(userId);

  if (!admin) {
    return res.status(400).json({
      ok: false,
      msg: "ha ocurrido un error fatal :o" - "admin inexistente",
    });
  }
  const validarPassword = bcrypt.compareSync(passActual, admin.password);

  if (!validarPassword) {
    return res.status(400).json({
      ok: false,
      msg: "no es la contraseña actual",
    });
  }

  if (passNueva != passRep) {
    return res.status(400).json({
      ok: false,
      msg: "ha ocurrido un error fatal :o" - "las contraseñas no son iguales",
    });
  }
  try {
    const passUpdate = await Admin.findByIdAndUpdate(userId, passNueva, {
      new: true,
    });

    return res.json({
      msg: "Usuario actualizado :)",
      passUpdate
    });
  } catch (error) {
    return res.status(500).json({
      msg: "no se ha podido actualizar :c",
    });
  }
};

module.exports = ctrlAdmin;
