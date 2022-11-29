const router = require("express").Router();
const { check } = require("express-validator");
const { getCarData, postDenuncia, postAuto } = require("../controllers/domainData.controller");
const validateJWT = require("../middlewares/validateJWT");


router.get("/buscarDom/:id",getCarData);

// router.post("/nuevaDenuncia",[validateJWT], postDenuncia)
router.post("/subirAuto", postAuto)

module.exports = router;
