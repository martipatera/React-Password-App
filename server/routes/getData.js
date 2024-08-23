const getData = require("express").Router()//.Router() abych mohl pouzivat v getData v jine komponente
const passwords = require("../models/Schema")//importuju moje Schema

getData.get("/get_passwords/", async(request, response) => {
    try{
        const docs = await passwords.find({})//najde to vsechny dokument
        return response.json({msg: "Success", data: docs}).status(201)
    }
    catch(err){
        return response.status(500).json({msg: "Failed", error : err.msg})}

    },
    
  

)

module.exports = getData