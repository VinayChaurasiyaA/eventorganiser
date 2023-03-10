const mongoose = require("mongoose");
const userEvents = new mongoose.Schema({
    eventname : String,
    date : String,
    place : String,
    description : String
} ,  {
    collection : "event",
});

const Event = mongoose.model("Event" , userEvents);

module.exports = Event;