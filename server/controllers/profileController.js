// controllers/profileController.js
exports.getProfile = (req, res) => {
    // Fetch user data from a database or service
    const userProfile = {
        name: "John Doe",
        email: "john.doe@example.com",
        bio: "Volunteer enthusiast."
    };
    res.render('profile', { profile: userProfile });
};

exports.updateProfile = (req, res) => {
    // Logic to update user profile
    const updatedData = req.body;
    // Save updated data to the database
    res.redirect('/profile'); // Redirect to the profile page after update
};
