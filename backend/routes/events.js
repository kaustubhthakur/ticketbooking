const express = require('express')
const router= express.Router();
const {createEvent,getEvent,getEvents,deleteEvent,updateEvent} = require('../controllers/events')
const {protectRoute} = require('../utils/protectRoute')
const {verifyAdmin} = require('../utils/protectRoute');
router.post('/',verifyAdmin,protectRoute,createEvent)
router.get('/:id',verifyAdmin,protectRoute,getEvent)
router.get('/',getEvents)
router.delete('/:id',verifyAdmin,protectRoute,deleteEvent)
router.put('/:id',protectRoute,verifyAdmin,updateEvent)
module.exports = router;