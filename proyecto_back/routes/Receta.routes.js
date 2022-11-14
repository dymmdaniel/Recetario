const express = require("express")
const router = express.Router()
const RecetaController = require("../controllers/Receta.controller")

router.post("/",RecetaController.create)

module.exports = router