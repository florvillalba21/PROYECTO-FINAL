const router = require("express").Router();
const { check } = require("express-validator");
const { getCarData } = require("../controllers/domainData.controller");

router.post("");
router.get("/buscarDominio/:id", [check("matricula").notEmpty()], getCarData);
