//  1. IMPORT


const bcryptjs = require("bcryptjs")
const req = require("express/lib/request")
const async = require("hbs/lib/async")
const mongoose = require("mongoose")
const NewComic = require("../models/Sell")

//  2. FUNCTIONS

exports.getMenu = (req,res) => {

    res.render("store/store")
}

exports.sell = (req,res) => {
    res.render("store/sell")
}


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
        studio,
        price } = req.body

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
        studio,
        price
    })   
        console.log(newComicForSell)
        res.redirect("/mylist")
        
    
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

exports.myList= async (req, res) => {

    try {
        const foundComics = await NewComic.find({})
        
        res.render("store/mylist", {
            data: foundComics
        })
        
    } catch (error) {
        console.log(error)
    }
    
}

exports.getSingleComic= async (req,res) => {
    
    const { comicID } = req.params

    const getTheComic= await NewComic.findById(comicID)

    res.render("store/singlecomic", {
        comic: getTheComic
    })

}

exports.updateComic= async (req,res) => {

        const { comicID } = req.params

        const foundComic = await NewComic.findById(comicID)

        res.render("store/edit", {
            comic: foundComic
        })

}

exports.updateComicForm= async (req,res) => {

    const { comicID } = req.params

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

    const updatedComic = await NewComic.findByIdAndUpdate(comicID, {
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
    }, {new: true})

    return res.redirect(`/${updatedComic._id}`)
}

exports.deleteComic = async (req,res) => {

        const { comicID } =req.params

        await NewComic.findByIdAndDelete(comicID)

        res.redirect("/mylist")

}