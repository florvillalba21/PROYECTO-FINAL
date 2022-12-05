const { check } = require("express-validator");
const { postAdmin, loginAdmin, getAdmin, putAdmin } = require("../controllers/login.controller");
const validarCampos = require("../middlewares/validate-fields");
const validateCredencial = require("../middlewares/validateCredencial");
const validateJWT = require("../middlewares/validateJWT");
const router = require("express").Router();

router.post(
  "/login",
  [
    check("credencial")
      .not()
      .isEmpty()
      .isString()
      .withMessage("campo invalido"),
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

router.get("/admins",[validateJWT],getAdmin);
router.put("/cambiarPass", [validateJWT], putAdmin);

module.exports = router;
