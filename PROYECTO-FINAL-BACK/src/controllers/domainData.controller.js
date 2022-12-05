const cars = require("../models/cars.model");
const ctrlCar = {};

ctrlCar.getCarData = async (req, res) => {
  const matricula = req.params.id;
  const carData = await cars.findOne({matricula: matricula});

  if (!carData)
    return res.json({
      ok: false,
      msg: "No existe este vehiculo.",
    });

    try {
      return res.json({car: carData});
    
    } catch (error) {
      return res.json({error})
    }
  }

 


ctrlCar.postAuto = async(req, res)=>{
  const {matricula, titular,  marca, modelo, licencia, seguro, RTO} = req.body;
  console.log(matricula)
  
  const car = new cars({
    matricula,
    titular,
    marca,
    modelo,
    licencia,
    seguro,
    RTO
  })

  try {
    const newCar = await car.save();
    console.log(newCar)
    return res.json({
      ok: true,
      msg: "Dominio cargado correctamente.",
      newCar,
    });
  } catch (error) {
    return res.json({
      error
    })

    ;
  }

  

}
module.exports = ctrlCar;
