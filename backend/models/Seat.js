const mongoose = require('mongoose')
const SeatSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },
    isBooked: {
        type: Boolean,
        default: false,
    },
    seatNumber: {
        type: Number,
        default: 0,
    }
}, 
{
    timestamps: true,
});
module.exports = mongoose.model("Seat", SeatSchema);