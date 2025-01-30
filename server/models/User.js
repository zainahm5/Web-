const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  nationalID: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  volunteeringExp: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  skills: {
    type: [String], 
    default: []
  },
  volunteeringHistory: [{
    event: String, 
    hours: Number, 
    date: Date, 
  }]
});

module.exports = mongoose.model("User", UserSchema);
