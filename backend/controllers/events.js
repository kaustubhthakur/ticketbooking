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
const getEvent = async(req,res)=>{
    try {
        const event = await Event.findById(req.params.id);
        res.status(201).json(event);
    } catch (error) {
        console.error(error);
    }
}
const getEvents= async(req,res)=>{
    try {
        const events = await Event.find();
        res.status(201).json(events);
    } catch (error) {
        console.error(error);
    }
}
module.exports = {createEvent,getEvent,getEvents}