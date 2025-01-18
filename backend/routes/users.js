const express = require('express')
const router = express.Router();
const {getUser,getUsers,deleteUser} = require('../controllers/users')
const {protectRoute} = require('../utils/protectRoute')
const {verifyAdmin} = require('../utils/protectRoute');
router.get('/:profile',protectRoute,getUser)
router.get('/',getUsers)
router.delete('/:id',protectRoute,deleteUser)
module.exports = router;