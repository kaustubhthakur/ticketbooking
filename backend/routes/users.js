const express = require('express')
const router =express.Router();
const {getUser,getUsers,deleteUser}= require('../controllers/users')
const protectRoute= require('../utils/protectRoute')

router.delete('/:id',protectRoute,deleteUser)
router.get('/;id',protectRoute,getUser)
router.get('/',getUsers)
module.exports = router;