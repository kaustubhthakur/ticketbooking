const mongoose = require('mongoose')
const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        default: [],
    },
    description: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    totalseats: {
        type: Number,
        default: 10,
    },
    seats: {
        type: [String],
        default: [],
    },
    minprice:
    {
        type: Number,
        default: 0,
    },
    maxprice: {
        type: Number,
        default: 1e9,
    }
},
{
    timestamps: true,
})
module.exports = mongoose.model("Event", EventSchema)