const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const router = express.Router();

// Sign Up (Create an Account) Route
router.post("/signup", async (req, res) => {
  try {
    console.log("Received form data:", req.body);  

    // Convert arrays to single values
    const userData = {
      email: Array.isArray(req.body.email) ? req.body.email[0] : req.body.email,
      firstName: Array.isArray(req.body.firstName) ? req.body.firstName[0] : req.body.firstName,
      lastName: Array.isArray(req.body.lastName) ? req.body.lastName[0] : req.body.lastName,
      password: Array.isArray(req.body.password) ? req.body.password[0] : req.body.password,
      phone: req.body.phone,
      nationalID: req.body.nationalID,
      birthDate: req.body.birthDate,
      gender: req.body.gender,
      education: req.body.education,
      volunteeringExp: req.body.volunteeringExp
    };

    console.log("Processed user data:", userData);  

    // Check if email already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return res.status(400).send("Email already exists! Try logging in.");
    }

    // Create and save new user
    const newUser = new User(userData);
    await newUser.save();
    
    console.log("User created successfully:", newUser);  
    res.redirect("/signin");  // Redirect to sign-in page (ممكن نخليه على طول للهوم بيج)
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).send("Error creating user");
  }
});

// Sign In (Login) Route
router.post("/signin", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error("Authentication Error:", err);
      return next(err);
    }
    if (!user) {
      console.log("Login failed:", info.message);
      return res.status(400).send("Invalid email or password!");
    }

    req.logIn(user, (err) => {
      if (err) {
        console.error("Login Error:", err);
        return next(err);
      }
      console.log("User logged in successfully:", user);
      return res.redirect("/");  
    });
  })(req, res, next);
});

module.exports = router;
