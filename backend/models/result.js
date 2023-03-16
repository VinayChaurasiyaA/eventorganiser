const mongoose = require("mongoose")
const result = new mongoose.Schema({
    firstwinner : String,
    secondwinner : String,
    thirdwinner : String,
    eventname : String
},
{
    collection : "results"
})
const results = mongoose.model("Result" , result);
module.exports = results;