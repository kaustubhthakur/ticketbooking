const express = require('express')
const router = express.Router();
const {createEvent,getEvent,getEvents} = require('../controllers/events')
const protectRoute =require('../utils/protectRoute')
const verifyAdmin = require('../utils/verifyAdmin')
router.post('/',protectRoute,verifyAdmin,createEvent)
router.get('/:id',protectRoute,verifyAdmin,getEvent)
router.get('/',getEvents)
module.exports = router;