const express = require("express")
const router = express.Router()
const RecetaController = require("../controllers/Receta.controller")

router.post("/",RecetaController.create)
router.get("/", RecetaController.find)
router.get("/:nombre", RecetaController.findOne)
router.put("/:nombre", RecetaController.update)
router.delete("/:nombre", RecetaController.remove)

module.exports = router