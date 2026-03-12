const mongoose = require('mongoose')

const usermodel = mongoose.Schema({
    username:{
        type: String,
        unique: [true, "username is already exist"]
    }
})