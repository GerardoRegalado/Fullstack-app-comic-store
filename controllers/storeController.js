//  1. IMPORT


const bcryptjs = require("bcryptjs")
const mongoose = require("mongoose")
const NewComic = require("../models/Sell")

//  2. FUNCTIONS

exports.getMenu = (req,res) => {

    res.render("store/store")
}

exports.sell = (req,res) => {
    res.render("store/sell")
}

const comicsForsell = []
exports.sellForm = async (req,res) => {

    const { 
        comicName,
        volumeNumber,
        published,
        writer,
        penciler,
        coverArtist,
        description,
        condition,
        shipping,
        studio } = req.body

    try {
    
    const newComicForSell= await NewComic.create({
        comicName,
        volumeNumber,
        published,
        writer,
        penciler,
        coverArtist,
        description,
        condition,
        shipping,
        studio
    })   
        console.log(newComicForSell)
        res.redirect("/profile")
        console.log("aqui termino el console log de arriba")
        //comicsForsell.unshift(newComicForSell)
    
    } catch (error) {
        console.log(error)
		console.log(error.errors)

		if (error instanceof mongoose.Error.ValidationError){
			
			return res.render("/store", {
				errorMessage: "Validation Server Error"
			})
		}

		return
    }
}