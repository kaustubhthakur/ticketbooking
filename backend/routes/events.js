const express = require('express')
const router= express.Router();
const {createEvent} = require('../controllers/events')
const protectRoute = require('../utils/protectRoute')
const verifyAdmin = require('../utils/protectRoute')
router.post('/',verifyAdmin,protectRoute,createEvent)
module.exports = router;