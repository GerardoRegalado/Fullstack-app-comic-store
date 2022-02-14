//  1. IMPORT
const res       = require("express/lib/response")
const User      = require("./../models/Signin")
const bcryptjs = require("bcryptjs")
const mongoose = require("mongoose")
const async = require("hbs/lib/async")

//  2. FUNCTIONS

//  2.1 GET HOME
exports.getHome = (req,res) => {

    res.render("home")
}

//  2.1 SIGN IN
exports.signIn = (req,res) => {

    res.render("signin")

}

//  2.2 SIGN IN FORM
exports.signInForm = async (req,res) => {

    const { username, password, about, firstName, lastName, email, city }= req.body
    
    //2.2.1 ENCRYPT
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)
    console.log(hashedPassword)

    //2.2.2 NEW USER 
    const newUser= await User.create({
        username,
        password: hashedPassword,
        about,
        firstName,
        lastName,
        email,
        city
    })
    console.log(newUser)
    res.redirect("/profile")
    

}

//  2.3 LOG IN
exports.logIn = (req,res) => {

    res.render("login")
}

//  2.4 LOG IN FORM

exports.logInForm = async (req,res) => {

    console.log(req.body)
    const { username, password } = req.body
  

    //  2.4.1 USER VALIDATION 
    const findUser = await User.findOne({ username })
    if(!findUser){
        res.render("login", {
            errorMessage: "Invalid Username or Password"
        })
        return
    }

    //  2.4.2 PASS VALIDATION 
    const verifyPass = await bcryptjs.compareSync(password, findUser.password)
    if(!verifyPass){
        res.render("login", {
            errorMessage: "Invalid Username or Password"
        })
        return
    }

    // 2.4.3 SESSION MANAGEMENT
    req.session.currentUser= {
        _id: findUser._id,
        username: findUser.username,
        email: findUser.email

    }
    
    //  2.4.4 REDIRECT 
    return res.redirect("/profile")

}



exports.logOut = (req, res) => {

	req.session.destroy((error) => {

		if(error){
			console.log(error)
			return
		}

		res.redirect("home")


	})

}



exports.profile = (req,res) => {

    res.render("profile")

}