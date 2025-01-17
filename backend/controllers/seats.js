const Seat = require('../models/Seat')
const Event = require('../models/Event')

const createSeat = async (req, res, next) => {
    const eventId = req.params.eventid;
    const newSeat = new Seat(req.body);

    try {
        const savedSeat = await newSeat.save();
        try {
            await Hotel.findByIdAndUpdate(eventId, {
                $push: { seats: savedSeat._id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedSeat);
    } catch (err) {
        next(err);
    }
};
const updateSeat = async (req, res, next) => {
    try {
        const updatedSeat = await Seat.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedSeat);
    } catch (err) {
        next(err);
    }
};
const updateSeatAvailability = async (req, res, next) => {
    try {
        await Seat.updateOne(
            { "seatNumbers._id": req.params.id },
            {
                $push: {
                    "seatNumbers.$.isbooked": req.body.booleans
                },
            }
        );
        res.status(200).json("Room status has been updated.");
    } catch (err) {
        next(err);
    }
};
const deleteSeat = async (req, res, next) => {
    const eventId = req.params.eventid;
    try {
        await Seat.findByIdAndDelete(req.params.id);
        try {
            await Event.findByIdAndUpdate(eventId, {
                $pull: { seats: req.params.id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json("Room has been deleted.");
    } catch (err) {
        next(err);
    }
};
const getSeats = async (req, res) => {
    try {
        const seats = await Seat.find();
        res.status(201).json(seats);
    } catch (error) {
        console.error(error)
    }
}
const getSeat = async (req, res) => {
    try {
        const seat = await Seat.findById(req.params.id);
        res.status(201).json(seat);
    } catch (error) {
        console.error(error)
    }
}
module.exports = { createSeat, deleteSeat, updateSeatAvailability, updateSeat, getSeat, getSeats }