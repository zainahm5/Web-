// GET Homepage
exports.homepage = async (req, res) => {
  const locals = {
    title: 'SeasonServe',
    description: 'Volunteering Opportunities Website'
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
}

// GET About
exports.about = async (req, res) => {
  const locals = {
    title: 'About - SeasonServe',
    description: 'Volunteering Opportunities Website'
  }
  res.render('about', {
    locals,
    layout: '../views/layouts/front-page'
  });
}

// GET Events
exports.events = async (req, res) => {
  const locals = {
    title: 'Events - SeasonServe',
    description: 'Volunteering Opportunities Website'
  }
  res.render('events', {
    locals,
    layout: '../views/layouts/main'
  });
}

// GET Details
exports.details = async (req, res) => {
  const locals = {
    title: 'Details - SeasonServe',
    description: 'Volunteering Opportunities Website'
  }
  res.render('details', locals);
}

// GET Profile
exports.profile = async (req, res) => {
  const locals = {
    title: 'Profile - SeasonServe',
    description: 'Volunteering Opportunities Website'
  }
  if (!req.user) {
    return res.status(401).send("Access Denied");
  }
  res.render('profile', {
    locals,
    user: req.user ,
    layout: '../views/layouts/main'
  });
}
const User = require("../models/User");
exports.updateProfile = async (req, res) => {
  try {
    console.log("Received update data:", req.body);

    const { firstName, lastName, education, volunteeringExp, skills } = req.body;

    // Convert skills from comma-separated string to array
    const skillsArray = skills ? skills.split(",") : [];

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id, 
      { firstName, lastName, education, volunteeringExp, skills: skillsArray },
      { new: true }
    );

    if (!updatedUser) {
      console.log("User not found");
      return res.status(404).send("User not found");
    }

    console.log("Updated user:", updatedUser);
    res.redirect("/profile");
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).send("Error updating profile");
  }
};


// GET Sign In
exports.signin = async (req, res) => {
  const locals = {
    title: 'Sign In - SeasonServe',
    description: 'Volunteering Opportunities Website'
  }
  res.render('signin', {
    locals,
    layout: '../views/layouts/sign',
    error: null  // `error` is always defined
  });
}

// GET Sign Up
exports.signup = async (req, res) => {
  const locals = {
    title: 'Sign Up - SeasonServe',
    description: 'Create an account for volunteering'
  };
  res.render('signup', { locals, layout: '../views/layouts/sign', error: null });
};

const Events = require('../models/Events');
const mongoose = require('mongoose');

/**
 * GET /
 * Events
 */

exports.events = async (req, res) => {
  const locals = {
    title: 'Events - SeasonServe',
    description: 'Volunteering Opportunities Website'
  };

  try {
    console.log("Fetching events...");

    const events = await Events.find({});

    res.render('events', {
      locals,
      events
    });

  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).send("Error fetching events");
  }
};

