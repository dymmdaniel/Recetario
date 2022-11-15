const express = require("express")
const router = express.Router()
const MenuController = require("../controllers/Menu.controller")

router.post("/",MenuController.create)
router.get("/", MenuController.find)
router.get("/:nombreReceta", MenuController.findOne)
router.put("/:nombreReceta", MenuController.update)
router.delete("/:nombreReceta", MenuController.remove)


module.exports = router