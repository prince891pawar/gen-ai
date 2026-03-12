const mongoose = require('mongoose')

async function connecttoDB() {
    try { 
        await mongoose.connect(process.env.MONGO_URL)

    console.log("connect to db successfully")
    }
    catch(err){
        console.log(err)
    }
}
module.exports = connecttoDB