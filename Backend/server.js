require("dotenv").config()
const app = require('./src/app.js')

const connecttodb = require('./src/config/database.js')


connecttodb()
app.listen(3000, () => {
    console.log("server is running on 3000 port")
})