const User = require('../models/User')
const deleteUser= async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"user is deleted...."})
    } catch (error) {
        console.error(error);
    }
}
const getUser= async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
    }
}
module.exports = {deleteUser,getUser}