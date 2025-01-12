const mongoose = require('mongoose')
const SeatSchema = new mongoose.Schema({
    price: { type: Number, default: 0 },
    seatNumber: [
        {
            number: Number,
            isbooked: {
                type: Boolean,
                default: false,
            }
        }
    ],
    section: {
        type: String,
        default: ""
    },
})
module.exports = mongoose.model("Seat", SeatSchema)