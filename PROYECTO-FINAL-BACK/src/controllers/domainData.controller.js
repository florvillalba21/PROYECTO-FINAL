const cars = require ('../models/cars.model')
const ctrlCar = {}


ctrlCar.getCarData = async(req, res)=>{
    const {matricula} = req.body
    const carData = await cars.findOne({matricula})

    if(!carData)
    return res.json({
        msg: 'no existe este vehiculo'
    })

    return carData;
}
module.exports = ctrlCar;