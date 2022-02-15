//  1. IMPORT
const express			= require("express")
const router			= express.Router()

const storageController = require("../controllers/storeController")
const routeGuard        =   require("../middlewares/route-guard")


//  2. ROUTER

//  2.1 MENU STORE
router.get("/store",routeGuard.privateAreas, storageController.getMenu) 

//  2.2 SELL PAGE   
router.get("/sell",routeGuard.privateAreas, storageController.sell)
router.post("/sell", routeGuard.privateAreas,storageController.sellForm )






// 3. EXPORT
module.exports = router