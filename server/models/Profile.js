

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    birthDate: { type: Date },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    skills: [String], // Array of strings for skills
    image: { type: String } // Path to the profile image
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
