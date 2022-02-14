//1. IMPORT


const mongoose = require("mongoose")




//2. FUNCTION
const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true})
         console.log('base de datos conectada')   
    }
    
    catch (error) {

        console.log(error)
        return process.exit(1)
    }

}

//3. EXPORTS

module.exports = connectDB