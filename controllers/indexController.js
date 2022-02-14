//1. CONTROLLER

const res = require("express/lib/response")

//2. FUNCTIONS
exports.getIndex = (req,res) => {

    res.render("index")
}