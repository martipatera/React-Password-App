const mongoose = require("mongoose")//databaze
const dotenv = require("dotenv")//soubor co je jen local
dotenv.config()//pouziti .env

const url = process.env.DB_CONNECT

const connectDB = async() =>{
    try{
        await mongoose.connect(url)
        console.log("connected to db" + url)
    }
    catch(error){
        console.error(`connection to db has failed: ${error}`)
    }
    
}
module.exports = connectDB
