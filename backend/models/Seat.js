const mongoose= require('mongoose')
const SeatSchema = new mongoose.Schema({
    isbooked:{
        type:Boolean,
        default:false,
    },
    seat:[
    ]
})
module.exports = mongoose.model("Seat",SeatSchema)