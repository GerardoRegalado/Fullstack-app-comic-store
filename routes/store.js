//  1. IMPORT
const express			= require("express")
const router			= express.Router()

const storeController = require("../controllers/storeController")
const routeGuard        =   require("../middlewares/route-guard")


//  2. ROUTER

//  2.1 MENU STORE
router.get("/store",routeGuard.privateAreas, storeController.getMenu) 

//  2.2 SELL PAGE   
router.get("/sell",routeGuard.privateAreas, storeController.sell)
router.post("/sell", routeGuard.privateAreas,storeController.sellForm)

//  2.3 MYLIST  (CRUD)
router.get("/mylist", routeGuard.privateAreas, storeController.myList)


//  2.4 SEARCH A COMIC
router.get("/:comicID", routeGuard.privateAreas, storeController.getSingleComic)

//  2.5 UPDATE A COMIC
router.get("/:comicID/edit", routeGuard.privateAreas, storeController.updateComic)
router.post("/:comicID/edit", routeGuard.privateAreas, storeController.updateComicForm)

// 2.6  DELETE A COMIC
router.post("/:comicID/delete", routeGuard.privateAreas, storeController.deleteComic)




// 3. EXPORT
module.exports = router