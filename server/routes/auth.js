const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const router = express.Router();

// Signup (create an account)
router.post("/signup", async (req, res) => {
  try {
    console.log("Received form data:", req.body);

    // Convert arrays to single values (Fix for duplicated form fields)
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

    // Check if email, phone, or national ID already exists
    const existingUser = await User.findOne({
      $or: [
        { email: userData.email.trim().toLowerCase() },
        { phone: userData.phone },
        { nationalID: userData.nationalID }
      ]
    });

    if (existingUser) {
      let errorMsg = "";
      if (existingUser.email === userData.email.trim().toLowerCase()) {
        errorMsg = "The email you entered is already registered.";
      } else if (existingUser.phone === userData.phone) {
        errorMsg = "The phone number is already registered.";
      } else if (existingUser.nationalID === userData.nationalID) {
        errorMsg = "The National ID is already registered.";
      }

      console.log("Signup failed:", errorMsg);
      return res.render("signup", { 
        error: errorMsg, 
        locals: {
          title: 'Sign Up - SeasonServe',
          description: 'Create an account for volunteering'
        },
        layout: '../views/layouts/sign'
      });
    }

    // Create and save new user
    const newUser = new User(userData);
    await newUser.save();

    console.log("User created successfully:", newUser);
    res.redirect("/signin");
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).send("Error creating user");
  }
});

// Check if email already exists (Step 1)
router.get("/check-email", async (req, res) => {
  const email = req.query.email.trim().toLowerCase();
  const existingUser = await User.findOne({ email });

  return res.json({ exists: !!existingUser });
});

// Check if phone already exists (Step 2)
router.get("/check-phone", async (req, res) => {
  const phone = req.query.phone.trim();
  const existingUser = await User.findOne({ phone });

  return res.json({ exists: !!existingUser });
});

// Check if national ID already exists (Step 2) - Now only checked on form submission
router.get("/check-nationalid", async (req, res) => {
  if (!req.query.nationalID) {
    return res.json({ exists: false });
  }

  const nationalID = req.query.nationalID.trim();
  const existingUser = await User.findOne({ nationalID });

  return res.json({ exists: !!existingUser });
});

// Signin (login)
router.post("/signin", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error("Authentication Error:", err);
      return next(err);
    }
    if (!user) {
      console.log("Login failed:", info?.message);
      return res.render("signin", { 
        error: "Invalid email or password!",
        locals: {
          title: 'Sign In - SeasonServe',
          description: 'Volunteering Opportunities Website'
        },
        layout: '../views/layouts/sign'
      });
    }    

    req.logIn(user, (err) => {
      if (err) {
        console.error("Login Error:", err);
        return next(err);
      }
      console.log("User logged in successfully:", user);
      return res.redirect("/dashboard");  
    });
  })(req, res, next);
});

module.exports = router;

