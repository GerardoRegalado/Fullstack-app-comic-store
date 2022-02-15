//  1. IMPORT
const express			= require("express")
const router			= express.Router()

const userController    = require("./../controllers/userController")
const routeGuard        =   require("./../middlewares/route-guard")

//  2. ROUTER

//  2.1 HOME - WELCOME PAGE
router.get("/home",routeGuard.authAreas, userController.getHome)

//  2.2 SIGN IN 
router.get("/register",routeGuard.authAreas, userController.signIn)
router.post("/register",routeGuard.authAreas, userController.signInForm)

//  2.3 LOG IN
router.get("/login",routeGuard.authAreas, userController.logIn)
router.post("/login",routeGuard.authAreas, userController.logInForm)

//  2.4 LOG OUT
router.get("/logout",routeGuard.privateAreas, userController.logOut)

//  2.5 My Profile
router.get("/profile",routeGuard.privateAreas, userController.profile)



//  3.  EXPORT
module.exports = router