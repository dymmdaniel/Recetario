const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/Usuario.controller");

router.post("/login",usuarioController.login);
router.post("/registro",usuarioController.registro);

module.exports = router