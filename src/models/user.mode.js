const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type: String,
        unique: [true, "username is already exist"]
    },
    email:{
        type: String,
        unique: [true, "already is already exists"],
        required: true
    },
    password:{
        type: String, 
        required: true 
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel