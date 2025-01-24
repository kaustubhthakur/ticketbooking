const express = require('express')
const router = express.Router();
const {getUser,getUsers,deleteUser} = require('../controllers/users')
router.delete('/:id',deleteUser)
router.get('/:id',getUser)
router.get('/',getUsers);
module.exports = router;