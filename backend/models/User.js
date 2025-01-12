const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    bookings:{
        type:[String],
        default:[],
    },
    role:{
        type:String,
        enum:["user","creator"],
        default:"user",
    },
profilePic:{
    type:String,
    default:"",
}
},
{
    timestamps:String,
})
module.exports = mongoose.model("User",UserSchema);