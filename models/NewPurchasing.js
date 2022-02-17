//1. IMPORT
const { contentType } = require("express/lib/response")
const mongoose  =require("mongoose")

//2. SCHEMA

const NewPurchasingSchema = mongoose.Schema({

    Name: {
        type:       String,
        required:   true
    },

    Card: {
        type:       Number,
        required:   true
    },

    expirationMonth: {
        type:       Number,
        required:    true
    },

    expirationYear: {
        type:       Number,
        required:   true
    },

    securityCode: {
        type:       Number,
        required:   true
    }

})

//3. MODEL

const NewPurchasing= mongoose.model("NewPurchasing", NewPurchasingSchema)

//4. EXPORT

module.exports= NewPurchasing
