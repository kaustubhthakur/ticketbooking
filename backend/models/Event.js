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
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    seats: {
        type: [String],
        default: [],
    },
    totalseats: {
        type: Number,
        default: 0,
    },

rating: {
        type: Number,
        default: 0,
    }
},
    {
        timestamps: true,
    })
module.exports = mongoose.model("Event", EventSchema);