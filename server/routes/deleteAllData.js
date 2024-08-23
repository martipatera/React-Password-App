const deleteData = require("express").Router()
const passwords = require("../models/Schema")//importuju moje Schema



deleteData.delete("/delete_all", async (request,response) => {//delete pro smazani get patch delete post
    try{
        await passwords.deleteMany() //najde to vsechny dokumenty
        response.status(200).send({msg: "all data deleted"})
    }
    catch(error){
        response.status(500).send({msg: "error occured"})
    }
}
)

module.exports = deleteData