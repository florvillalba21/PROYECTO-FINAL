const { check } = require("express-validator");
const { postAdmin, getAdmin } = require("../controllers/login.controller");
const validarCampos = require("../middlewares/validate-fields");
const validateUsername = require("../middlewares/validateUsername");
const router = require("express").Router();

router.get("/login", getAdmin);
router.post(
  "/register",
  [
    check("credencial")
      .not()
      .isEmpty()
      .isString()
      .withMessage("campo invalido")
  ],
  postAdmin
);

module.exports = router;
