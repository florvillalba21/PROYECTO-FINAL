const { check } = require("express-validator");
const { postDenuncia, getDenuncias, getDenunciasI, getDenunciasCat, getDenunciasB } = require("../controllers/denuncias.controller");
const validateJWT = require("../middlewares/validateJWT");

const router = require("express").Router();


router.post("/denunciasN",
 postDenuncia)
router.get("/denuncias",[validateJWT], getDenuncias)
router.get("/denunciasCat",[validateJWT], getDenunciasCat)
router.get("/denBuscador",[validateJWT], getDenunciasB)

 module.exports = router