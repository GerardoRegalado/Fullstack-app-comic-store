const express			= require("express")
const router			= express.Router()

const forBuyController = require("./../controllers/forBuyController")
const routeGuard        =   require("../middlewares/route-guard")


//  2. ROUTER

//  2.1 STORE
router.get("/availableComics", routeGuard.privateAreas, forBuyController.availableComics)

//  2.2 SINGLE COMIC
router.get("/availableComic/:comicID", routeGuard.privateAreas, forBuyController.singleComic)







// 3. EXPORT
module.exports = router