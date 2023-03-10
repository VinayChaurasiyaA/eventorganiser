const mongoose = require("mongoose");
const eventss = new mongoose.Schema(
  {
    eventname: String,
    date: String,
    place: String,
    description: String,
  },
  {
    collection: "moreevent",
  }
);

const MoreEvent = mongoose.model("MoreEvent", eventss);

module.exports = MoreEvent;
