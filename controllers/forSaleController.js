//  1. IMPORT


const bcryptjs = require("bcryptjs")
const req = require("express/lib/request")
const async = require("hbs/lib/async")
const mongoose = require("mongoose")
const NewComic = require("../models/NewComicForSale")

//  2. FUNCTIONS

exports.getMenu = (req,res) => {

    res.render("forSale/store")
}

exports.sell = (req,res) => {
    res.render("forSale/sell")
}


exports.sellForm = async (req,res) => {

    const { 
        image,
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
        image,
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
        res.redirect("/sale/mylist")
        
    
    } catch (error) {
        console.log(error)
		console.log(error.errors)

		if (error instanceof mongoose.Error.ValidationError){
			
			return res.render("forSale/store", {
				errorMessage: "Validation Server Error"
			})
		}

		return
    }
}

exports.myList= async (req, res) => {

    try {
        const foundComics = await NewComic.find({})
        
        res.render("forSale/mylist", {
            data: foundComics
        })
        
    } catch (error) {
        console.log(error)
    }
    
}

exports.getSingleComic= async (req,res) => {
    
    const { comicID } = req.params

    const getTheComic= await NewComic.findById(comicID)

    res.render("forSale/singlecomic", {
        comic: getTheComic
    })

}

exports.updateComic= async (req,res) => {

        const { comicID } = req.params

        const foundComic = await NewComic.findById(comicID)

        res.render("forSale/edit", {
            comic: foundComic
        })

}

exports.updateComicForm= async (req,res) => {

    const { comicID } = req.params

    const { 
        image,
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

    const updatedComic = await NewComic.findByIdAndUpdate(comicID, {
        image,
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
    }, {new: true})

    return res.redirect(`/sale/${updatedComic._id}`)
}

exports.deleteComic = async (req,res) => {

        const { comicID } =req.params

        await NewComic.findByIdAndDelete(comicID)

        res.redirect("/sale/mylist")

}