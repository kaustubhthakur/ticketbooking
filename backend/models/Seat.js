const mongoose = require('mongoose')
const SeatSchema = new mongoose.Schema({
    price: {
        type: Number,
        default: 0,
    },
    seatNumber: [{
        isBooked: {
            type: Boolean,
            default: false,
        },
        number: {
            type: Number,
            default: 1,
        }
    }],

},{
    timestamps:true,
})
module.exports = mongoose.model("Seat",SeatSchema);