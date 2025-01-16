const express = require('express')
const app = express();
const port = 9000;
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
require('dotenv').config();
const authrouter = require('./routes/auth')
app.use(express.json())
app.use(cookieParser())

const connection = async(req,res)=> {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('database is connected...')
    } catch (error) {
        console.log(error)
    }
}

connection();
app.use('/auth',authrouter);
app.listen(port,() => {
    console.log(`server is running on port ${port}...`)
})