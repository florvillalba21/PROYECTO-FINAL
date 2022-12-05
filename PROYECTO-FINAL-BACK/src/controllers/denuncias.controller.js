const Denuncia = require("../models/denuncias.model");

const CtrlDenuncias = {};

CtrlDenuncias.getDenuncias = async (req, res) => {
  const denuncias = await Denuncia.find();

  if (!denuncias) {
    return res.json({
      ok: false,
      msg: "No hay denuncias realizadas",
    });
  }
  return res.json({ ok: true, denuncias });
};

CtrlDenuncias.postDenuncia = async (req, res) => {
  const { matricula, marca, color, categorias, detalles, fecha } = req.body;

  const denuncia = new Denuncia({
    matricula,
    marca,
    color,
    categorias,
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
module.exports = CtrlDenuncias;
