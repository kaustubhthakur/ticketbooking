const mongoose = require('mongoose')
const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        default: [],

    },
    city: {
        type: String,
        default: "",
        required: true,
    },
    location: {
        type: String,
        default: "",
        required: true,
    },
    seats: {
        type: [String],
        default: [],
    },
    minprice: {
        type: Number,
        default: 0,

    },
    maxprice: {
        type: Number,
        default: 1000000,
    },
    maxseats: {
        type: Number,
        default: 0,
        required: true,
    }

},
    {
        timestamps: true,
    })
module.exports = mongoose.model("Event", EventSchema);