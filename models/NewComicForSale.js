//1. IMPORT
const { contentType } = require("express/lib/response")
const mongoose  =require("mongoose")

//2. SCHEMA

const NewComicSchema = mongoose.Schema({

    image:{
        type:       String,
        required:   true
    },

    comicName: {
        type:       String,
        required:   true
    },

    volumeNumber: {
        type:       Number,
        required:   true
    },

    published: {
        type:       Date,
        required:   false
    },

    writer: {
        type:       String,
        required:   true,
    },

    penciler:{
        type:       String,
        required:   true,
    },

    coverArtist: {
        type:       String,
        required:   true
    },

    description: {
        type:       String,
        required:   false
    },

    condition: {
        type:       String,
        required:   true
    },

    shipping: {
        type:       String,
        required:   true
    },

    studio: {
        type:       String,
        required:   false
    },

    price: {
        type:       Number,
        required:   true
    }

})

//3. MODEL

const NewComic= mongoose.model("NewComic", NewComicSchema)

//4. EXPORT

module.exports= NewComic

