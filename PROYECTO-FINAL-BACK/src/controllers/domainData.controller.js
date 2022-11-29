const cars = require("../models/cars.model");
const denuncias = require("../models/denuncias.model")
const ctrlCar = {};

ctrlCar.getCarData = async (req, res) => {
  const matricula = req.params.id;
  const carData = await cars.findOne({matricula: matricula});

  if (!carData)
    return res.json({
      msg: "no existe este vehiculo",
    });

  return res.json(carData);
};


ctrlCar.postDenuncia = async(req, res)=>{
  const {matricula, marca, color, detalles} = req.body;

  const existCar = await denuncias.findOne({matricula: matricula})

  if(!existCar){
    return res.json({msg: "no existe el vehiculo"})
  }

  const denuncia = new cars({
    matricula,
    marca,
    color,
    detalles
  })

  try {
    const newDenuncia = await denuncia.save();
    return res.json({
      ok: true,
      msg: "dominio cargado correctamente",
      newDenuncia,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al generar nueva matricula",
    });
  }

  

}

ctrlCar.postAuto = async(req, res)=>{
  const {matricula, titular, cedula, carnet, seguro, servis, marca, modelo} = req.body;

  const existCar = await cars.findOne({matricula: matricula})

  if(existCar){
    return res.json({msg: "existe el vehiculo"})
  }

  const car = new cars({
    matricula,
    titular,
    cedula,
    carnet,
    seguro,
    servis,
    marca,
    modelo
  })

  try {
    const newCar = await car.save();
    return res.json({
      ok: true,
      msg: "dominio cargado correctamente",
      newCar,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al generar nuevo auto",
    });
  }

  

}
module.exports = ctrlCar;
