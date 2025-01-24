const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const port = 9000;
const cookieparser = require('cookie-parser')
require('dotenv').config();
const cors = require('cors');
app.use(express.json());
app.use(cookieparser());
app.use(cors());


const connection = async(req,res)=>{
    try {
    await mongoose.connect(process.env.MONGODB);
    console.log('db is connected...')
    } catch (error) {
        console.log(error);
    }
}
connection();
app.listen(port,() => {
    console.log(`server is running on port ${port}...`)
})