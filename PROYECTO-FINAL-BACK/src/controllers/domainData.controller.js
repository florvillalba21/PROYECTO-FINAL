const cars = require("../models/cars.model");
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

ctrlCar.postCarData = async (req, res) => {
  const { matricula } = req.body;

  const car = new cars({
    matricula,
  });

  try {
    newCar = await car.save();
    return res.json({
      msg: "dominio cargado correctamente",
      newCar,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al generar nueva matricula",
    });
  }
};
module.exports = ctrlCar;
