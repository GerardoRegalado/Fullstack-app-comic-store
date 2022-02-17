
const req = require("express/lib/request")
const async = require("hbs/lib/async")
const mongoose = require("mongoose")
const NewComic = require("../models/NewComicForSale") 
const NewPurchasing = require("./../models/NewPurchasing")
const forSaleController = require("./../controllers/forSaleController")

//aqui hay que importar el modelo

//  2. FUNCTION

exports.availableComics = async (req,res) => {
    
    try {
    
        const availableComics = await NewComic.find({})
        res.render("forBuy/availableComics",{
            comicdata: availableComics
        })
        
    } catch (error) {
        console.log(error)
    }
 
}

exports.singleComic = async (req,res) => {
    
    const { comicID } = req.params
    
    const selectedComic= await NewComic.findById(comicID)

    res.render("forBuy/singleComic", {
        selectedComic:selectedComic
    })
}


