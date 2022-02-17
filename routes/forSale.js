//  1. IMPORT
const express			= require("express")
const router			= express.Router()


const forSaleController = require("../controllers/forSaleController")
const routeGuard        =   require("../middlewares/route-guard")


//  2. ROUTER

//  2.1 MENU STORE
router.get("/store",routeGuard.privateAreas,forSaleController.getMenu) 

//  2.2 SELL PAGE   
router.get("/sell",routeGuard.privateAreas, forSaleController.sell)
router.post("/sell", routeGuard.privateAreas,forSaleController.sellForm)

//  2.3 MYLIST  (CRUD)
router.get("/mylist", routeGuard.privateAreas, forSaleController.myList)


//  2.4 SEARCH A COMIC
router.get("/:comicID", routeGuard.privateAreas, forSaleController.getSingleComic)

//  2.5 UPDATE A COMIC
router.get("/:comicID/edit", routeGuard.privateAreas, forSaleController.updateComic)
router.post("/:comicID/edit", routeGuard.privateAreas, forSaleController.updateComicForm)

// 2.6  DELETE A COMIC
router.post("/:comicID/delete", routeGuard.privateAreas, forSaleController.deleteComic)




// 3. EXPORT
module.exports = router