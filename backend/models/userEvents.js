const mongoose = require("mongoose");
const eventRegister = new mongoose.Schema({
    name : String,
    username : String,
    leader : String,
    player1 : String,
    player2 : String,
    player3 : String,
    player4 : String,
    player5 : String,
    category : String,
    collegeId :Number
});
const UserEvent = new mongoose.model("UserEvent" , eventRegister);
module.exports = UserEvent;