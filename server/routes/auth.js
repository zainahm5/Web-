// routes/auth.js
const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const router = express.Router();

// Sign in (Log in) route
router.post("/login", passport.authenticate("local", {
  successRedirect: "/",  // successful login: Redirect to the profile page (change to home later)
  failureRedirect: "/login",    // authentication fails: Redirect back to login page
}));

// Sign Up (create an account) route
router.post("/signup", async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone, nationalID, birthDate, gender, education, volunteeringExp } = req.body;

    // Create a new user
    const newUser = new User({
      email,
      firstName,
      lastName,
      password, // Store the password as plain text ***
      phone,
      nationalID,
      birthDate,
      gender,
      education,
      volunteeringExp,
    });

    await newUser.save();  // Save user to the database
    res.redirect("/signin");  // successful signup: Redirect to the signin page
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user");  // Send error if something goes wrong
  }
});

module.exports = router;
