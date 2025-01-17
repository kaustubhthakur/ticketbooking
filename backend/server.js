const express = require('express')
const app = express();
const port = 9000;
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
require('dotenv').config();
const authrouter = require('./routes/auth')
const userrouter = require('./routes/users')
const eventrouter = require('./routes/events')
const seatrouter = require('./routes/seats')
app.use(express.json())
app.use(cookieParser())
app.use(cors());
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
app.use('/users',userrouter);
app.use('/events',eventrouter);
app.use('/seats',seatrouter)
app.listen(port,() => {
    console.log(`server is running on port ${port}...`)
})