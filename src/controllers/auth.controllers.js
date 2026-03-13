const { default: bcrypt } = require("bcryptjs")
const userModel = require("../models/user.model")
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')



/*
* registerUserController
* description register a new user, expects username, email, password
* desription register a new user 
* access public
**/
async function registerUserController(req, res){
    const {username, email, password} = req.body
    if(!username || !email || !password){
       return res.status(400).json({
        message:"email or password is provide"
       })
    }
   
    const isUserAlreadyExists = await userModel.findOne({
        $or:[{username}, {email}]
    })

    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"Account already exist with this email address or username"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username, 
        email, 
        password:hash
    })
     const token = jwt.sign(
        {id:user._id, username: user.username}, 
        process.env.JWT.SECRET,
        {expiresIn: "id"}
     )

     res.cookie("token", token)
     res.status(201).json({
        message: "user registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
     })
}

module.exports = {
    registerUserController
    
}