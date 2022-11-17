const router = require("express").Router();
const { check } = require("express-validator");
const { getCarData } = require("../controllers/domainData.controller");

router.get("/buscarDominio",getCarData);

module.exports = router;
