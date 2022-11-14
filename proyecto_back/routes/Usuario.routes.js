const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/Usuarios.controller");

router.post("/login",usuariosController.login);
router.post("/registro",usuariosController.registro);

module.exports = router