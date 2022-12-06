const Denuncia = require("../models/denuncias.model");

const CtrlDenuncias = {};

CtrlDenuncias.getDenuncias = async (req, res) => {
  const user = req.admin.rol;

  if (user == "ADMIN") {
    const denuncias = await Denuncia.find();
    if (!denuncias) {
      return res.json({
        ok: false,
        msg: "No hay denuncias realizadas",
      });
    }
    return res.json({ ok: true, denuncias });
  }
  if (user == "INSPECTOR") {
    const denuncias = await Denuncia.find({
      inspector: req.admin.credencial,
    });
    if (!denuncias) {
      return res.json({
        ok: false,
        msg: "No hay denuncias realizadas",
      });
    }
    return res.json({ ok: true, denuncias });
  }
};

CtrlDenuncias.postDenuncia = async (req, res) => {
  const {
    inspector,
    matricula,
    marca,
    color,
    cedula,
    RTO,
    seguro,
    licencia,
    detalles,
    fecha,
  } = req.body;

  const denuncia = new Denuncia({
    inspector,
    matricula,
    marca,
    color,
    cedula,
    RTO,
    seguro,
    licencia,
    detalles,
    fecha,
  });

  try {
    const newDenuncia = await denuncia.save();
    return res.json({
      ok: true,
      msg: "dominio cargado correctamente",
      newDenuncia,
    });
  } catch (error) {
    return res.json({
      ok: false,
      error,
    });
  }
};

CtrlDenuncias.getDenunciasCat = async (req, res) => {
  const tipoCat = req.headers.value;
  console.log(tipoCat)

  const denuncias = await Denuncia.find({tipoCat: true})

  
    if (!denuncias) {
      return res.json({
        ok: false,
        msg: "No hay denuncias realizadas",
      });
    }
    return res.json({ ok: true, denuncias });
  
};

CtrlDenuncias.getDenunciasB = async (req, res) => {
  const buscador = req.headers.value;
  console.log(buscador)

  const denuncias = await Denuncia.find({inspector: buscador})

  
    if (!denuncias) {
      return res.json({
        ok: false,
        msg: "No hay denuncias realizadas",
      });
    }
    return res.json({ ok: true, denuncias });
  
};
module.exports = CtrlDenuncias;
