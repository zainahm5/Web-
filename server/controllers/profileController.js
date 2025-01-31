// controllers/profileController.js
exports.getProfile = (req, res) => {
    // Fetch user data from a database or service
       const userProfile  = require('./models/User');
    const mongoose = require('mongoose');

    res.render('profile', { profile: userProfile });
};

exports.updateProfile = (req, res) => {
    // Logic to update user profile
    const updatedData = req.body;
    // Save updated data to the database
    res.redirect('/profile'); // Redirect to the profile page after update
};
