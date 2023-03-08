const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  firstname: String,
  date: String,
  gender: String,
  contact: Number,
  email: String,
  address: String,
  collegename: String,
  id: Number,
  year: String,
  username: String,
  password: String,
  cpassword: String,
});

const Register = new mongoose.model("Register" , studentSchema);

module.exports = Register