const cars = require ('../models/cars.model')
const ctrlCar = {}


ctrlCar.getCarData = async(req, res)=>{
    
    const carData = await cars.find()

    if(!carData)
    return res.json({
        msg: 'no existe este vehiculo'
    })

    return carData;
}
module.exports = ctrlCar;