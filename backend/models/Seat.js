const mongoose = require('mongoose')
const SeatSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },
    seatNumber: [{ number: Number, isBooked: { type: Boolean, default: false } }],
},
    {
        timestamps: true,
    });
module.exports = mongoose.model("Seat", SeatSchema);