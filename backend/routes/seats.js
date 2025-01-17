const express = require('express')
const router = express.Router();
const protectRoute = require('../utils/protectRoute')
const verifyAdmin = require('../utils/protectRoute');
const {createSeat,updateSeat,updateSeatAvailability,deleteSeat,getSeat,getSeats} = require('../controllers/seats')
router.post('/:id',protectRoute,verifyAdmin,createSeat)
router.put('/:id/:seatid',protectRoute,verifyAdmin,updateSeat)
router.put('/:id/:seatid',protectRoute,updateSeatAvailability)
router.delete('/:id/:seatid',protectRoute,verifyAdmin,deleteSeat)
router.get('/:id/:seatid',protectRoute,verifyAdmin,getSeat);
router.get('/:id',getSeats)
module.exports = router;