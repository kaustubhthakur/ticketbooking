const express =require('express')
const router = express.Router();
const protectRoute = require('../utils/protectRoute')
const verifyAdmin = require('../utils/verifyAdmin')
const {createSeat,deleteSeat,getSeat,getSeats,updateSeat,updateSeatAvailability}  = require('../controllers/seats')
router.post('/:eventid',protectRoute,verifyAdmin,createSeat)
router.put('/:id/:seatid',protectRoute,verifyAdmin,updateSeat)
router.put('/:id/:seatid',protectRoute,updateSeatAvailability)
router.delete('/:id/:seatid',protectRoute,verifyAdmin,deleteSeat)
router.get('/:id/:seatid',protectRoute,verifyAdmin,getSeat)
router.get('/',getSeats)
module.exports = router;