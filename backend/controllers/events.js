const Event = require('../models/Event')
const createEvent = async(req,res)=>{
    try {
        const newevent = new Event(req.body);
        const saveevent = await newevent.save();
        res.status(201).json(saveevent)
    } catch (error) {
        console.error(error);
    }
}
module.exports = {createEvent}