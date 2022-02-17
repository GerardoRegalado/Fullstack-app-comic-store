// 1. IMPORT

const express           = require("express")
const app               = express()
const hbs               = require("hbs")
const connectDB	        = require("./config/db")
const sessionManager 	= require("./config/session") 


// 2. MIDDLEWARES

require("dotenv").config()
sessionManager(app)

connectDB()

app.use(express.static("public"))
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

app.use(express.urlencoded({ extended: true }))


// 3. ROUTE

//  3.1 LAYOUT MIDDLEWARE
app.use((req, res, next) => {
	
	res.locals.currentUser = req.session.currentUser

	next()
})

//  3.2 PRINCIPAL ROUTES
app.use("/", require("./routes/index"))
app.use("/", require("./routes/user"))
app.use("/sale", require("./routes/forSale"))
app.use("/purchasing", require("./routes/forBuy"))




// 4. SERVER
app.listen(process.env.PORT, () => console.log(`Servidor activo en puerto ${process.env.PORT}`))