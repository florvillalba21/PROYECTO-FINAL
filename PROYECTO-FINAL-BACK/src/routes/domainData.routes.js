const router = require("express").Router();
const { check } = require("express-validator");
const { getCarData, postCarData } = require("../controllers/domainData.controller");

router.get("/buscarDom/:id",getCarData);
router.post("/nuevoDom",postCarData);

module.exports = router;
