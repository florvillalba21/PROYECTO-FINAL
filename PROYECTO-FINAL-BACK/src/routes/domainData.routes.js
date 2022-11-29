const router = require("express").Router();
const { check } = require("express-validator");
const { getCarData, postCarData } = require("../controllers/domainData.controller");

router.get("/buscarDom/:id",getCarData);
router.post("/nuevoDom",[
    check("matricula")
    .not()
    .isEmpty()
    .isString()
    .withMessage("campo invalido")
],postCarData);

router.post("/nuevaDenuncia")

module.exports = router;
