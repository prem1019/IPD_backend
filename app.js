const dotenv  = require("dotenv")
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const User = require('./models/userSchema')
const userRouter = require("./routes/userRoutes")

dotenv.config({path:'./config.env'})
require('./db/conn')


app.use(express.json())
app.use(require('./routes/userRoutes'))

const PORT = process.env.PORT

//middleware

const middleware = (req,res,next) =>{
    console.log("Middleware")
    next();
}

// middleware()

// app.get('/', (req, res)=> {
//     res.send('Server app.js')
// })

// app.use("/api/v1/user", userRouter)

app.listen(PORT, ()=>{
    console.log(`Server ${PORT}`)
})