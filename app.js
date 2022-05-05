const dotenv = require("dotenv")
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const User = require('./models/userSchema')
const userRouter = require("./routes/userRoutes")
const cors = require("cors");

app.use(cors({ credentials: true }));

dotenv.config({ path: './config.env' })
require('./db/conn')


app.use(express.json())
app.use(require('./routes/userRoutes'))

const PORT = process.env.PORT

const middleware = (req, res, next) => {
    console.log("Middleware")
    next();
}
// middleware()

app.listen(PORT, () => {
    console.log(`Server ${PORT}`)
})