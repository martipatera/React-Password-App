const postData = require("express").Router()//.Router() abych mohl pouzivat v getData v jine komponente
const password = require("../models/Schema")//import schema

postData.post("/post_passwords", async(request, response) => {
    try{
        const myPassword = new password({ //novy model
            name: request.body.name,
            password: request.body.password,
            id: request.body.id
            
        })
        await myPassword.save()
        response.status(201).send({msg: "Password saved successfully!"})
    }
    catch(err){
        response.status(500).send({msg: "Error saving password"})
    }
}
)

module.exports = postData