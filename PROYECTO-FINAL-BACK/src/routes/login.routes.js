const { check } = require("express-validator");
const { postAdmin, loginAdmin } = require("../controllers/login.controller");
const validarCampos = require("../middlewares/validate-fields");
const validateCredencial = require("../middlewares/validateCredencial");
const router = require("express").Router();

router.post(
  "/login",
  [
    check("credencial")
      .not()
      .isEmpty()
      .isString()
      .withMessage("campo invalido")
  ],
  loginAdmin
);

router.post(
  "/register",
  [
    check("credencial")
      .not()
      .isEmpty()
      .isNumeric()
      .withMessage("campo invalido")
  ],
  postAdmin
);

module.exports = router;
