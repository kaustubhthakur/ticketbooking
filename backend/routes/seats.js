const express = require('express')
const router = express.Router();
const protectRoute = require('../utils/protectRoute')
const verifyUser = require('../utils/organizer')
const {createSeat,updateSeat,updateSeatAvailability,deleteSeat,getSeat,getSeats} = require('../controllers/seats')
router.post('/:id',protectRoute,verifyUser,createSeat)
router.get('/:id/;id',verifyUser,protectRoute,getSeat)
router.get('/:id',protectRoute,getSeats)
router.put('/:id/:id',protectRoute,verifyUser,updateSeat)
router.put('/:id/:id',protectRoute,updateSeatAvailability)
router.delete('/:id/:id',protectRoute,verifyUser,deleteSeat)
module.exports = router;