// 1. IMPORT
const express			= require("express")
const router			= express.Router()

const indexController 	= require("../controllers/indexController")


// 2. ROUTER
// 2.1 HOME
router.get("/", indexController.getIndex)


// 3. EXPORT
module.exports = router