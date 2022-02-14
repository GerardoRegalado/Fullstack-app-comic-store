//1. IMPORT
const { contentType } = require("express/lib/response")
const mongoose  =require("mongoose")




//2. SCHEMA

const UserSchema = mongoose.Schema({

    username: {
        type:       String,
        required:   true,
        trim:       true,
        unique:     true,
    },

    password: {
        type:       String,
        required:   true
    },

    about: {
        type:       String,
        required:   false
    },

    firstName: {
        type:       String,
        required:   true
    },

    lastName: {
        type:       String,
        required:   true
    },

    email: {
        type:       String,
        required:   true
    },

    city: {
        type:       String,
        required:   false
    }

}, {timestamps: true})


//3. MODEL

const User= mongoose.model("User", UserSchema)

//4. EXPORT

module.exports= User