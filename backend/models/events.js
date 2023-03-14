const mongoose = require("mongoose");
const userEvents = new mongoose.Schema(
  {
    eventname: String,
    date: String,
    place: String,
    description: String,
  },
  {
    collection: "event",
  }
);
userEvents.statics.isThisPresent = async function (eventname) {
  try {
    const event = await this.findOne({ eventname });
    if (event) return false;
    return true;
  } catch (error) {
    console.log("Error inside isThisEmailMethod", error.message);
    return false;
  }
};
const Event = mongoose.model("Event", userEvents);

module.exports = Event;
