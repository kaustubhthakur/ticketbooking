const express = require('express')
const mongoose =require('mongoose')
const app = express();
const port = 9000;
const cookieparser= require('cookie-parser')
const authrouter = require('./routes/auth')
const eventrouter = require('./routes/events')
const cors = require('cors')
require('dotenv').config();



app.use(express.json())
app.use(cors())
app.use(cookieparser());

const connection = async(req,res)=>{
    try {
await mongoose.connect(process.env.MONGODB);
console.log('database is connected...')
    } catch (error) {
        console.log(error);
    }
}
connection();
app.use('/auth',authrouter);
app.use('/events',eventrouter);
app.listen(port,() =>{
    console.log(`server is running on port ${port}...`)
})