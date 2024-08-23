const registerUser = require("express").Router()
const userSchema = require("../models/UserSchema")


registerUser.post("/register", async (request, response) => {
    
    
    const newUser = new userSchema({
        email: request.body.email,
        password: request.body.password
        })
    

    try{
        const userExists = await userSchema.findOne({email: request.body.email})
        if(userExists){
        return response.status(400).json({msg: "user already exist"})
    }
        else{
        await newUser.save()
        response.status(201).json({msg: "User has been created successfuly"})
    }
        
    }
    catch(error){
        response.status(500).json({msg: "server error"})


    }

  
}
)

module.exports = registerUser