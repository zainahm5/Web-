const User = require('../models/User');

// Fetch profile data
// In profileController.js
exports.getProfile = async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).send("User not logged in");
      }
  
      // Ensure user data is passed to the view
      const user = req.user;
      res.render("profile", { user });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Server error");
    }
  };
  

// Update profile data
exports.updateProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json(updatedUser);  // Respond with updated user data
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

