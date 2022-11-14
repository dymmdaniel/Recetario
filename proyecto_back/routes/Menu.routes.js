const express = require("express")
const router = express.Router()
const MenuController = require("../controllers/Menu.controller")

router.post("/",MenuController.create)


module.exports = router