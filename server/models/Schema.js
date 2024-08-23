const mongoose = require("mongoose")
const password = new mongoose.Schema({ //musim si udelat Schema jak bude vypadat muj dokument
    name:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    }
    
    
},{timestamps:true})

module.exports = mongoose.model("password", password) //vyexportuju schema