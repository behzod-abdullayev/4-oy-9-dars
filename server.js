const express = require("express")
const cors = require("cors")
const dataRouter = require("./router/data.routes")
require("dotenv").config()


const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set("view engine", "ejs")
app.use(express.static("public"))

//routes
app.use(dataRouter)

app.listen(PORT, () => {
    console.log("server is running at: htpp://localhost:"+PORT);
    
})