const deleteData = require("express").Router()
const passwords = require("../models/Schema")//musim importovat schema

deleteData.delete("/delete_data/:id", async (request, response) => {//id ma kazdy jine, delete podle id ktere mam na frontendu a posilam ho sem
    try{
        await passwords.findByIdAndDelete(request.params.id)
        
        response.status(200).json({msg: "deleted successfuly"})
        


    }
    catch(error){
        response.status(500).json({msg: "error occured"})


    }
  
}
)
module.exports = deleteData