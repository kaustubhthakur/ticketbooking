const express = require('express')
const router = express.Router();
const {createEvent,getEvent,getEvents,deleteEvent} = require('../controllers/event')
const protectRoute = require('../utils/protectRoute')
router.post('/',protectRoute,createEvent)
router.get('/:id',protectRoute,getEvent)
router.get('/',getEvents)
router.delete('/:id',protectRoute,deleteEvent)
module.exports = router;