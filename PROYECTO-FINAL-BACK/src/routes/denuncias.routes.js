const { check } = require("express-validator");
const { postDenuncia, getDenuncias } = require("../controllers/denuncias.controller");
const validateJWT = require("../middlewares/validateJWT");

const router = require("express").Router();


router.post("/denunciasN",
 postDenuncia)
router.get("/denuncias", getDenuncias)

 module.exports = router