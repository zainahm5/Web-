// GET Homepage
exports.homepage = async (req, res) => {
  const locals = {
    title: 'SeasonServe',
    description: 'Volunteering Opportunities Website'
  };
  // Check if the user is logged in
  if (req.isAuthenticated && req.isAuthenticated()) {
    // User is logged in, render with main layout
    res.render('index', {
      locals,
      layout: '../views/layouts/main'
    });
  } else {
    // User is not logged in, render with front-page layout
    res.render('index', {
      locals,
      layout: '../views/layouts/front-page'
    });
  }
};


// GET About
exports.about = async (req, res) => {
  const locals = {
    title: 'About - SeasonServe',
    description: 'Volunteering Opportunities Website'
  }
  res.render('about', locals);
}

// GET Events
exports.events = async (req, res) => {
  const locals = {
    title: 'Events - SeasonServe',
    description: 'Volunteering Opportunities Website'
  }
  res.render('events', locals);
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
  res.render('profile', locals);
}

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

// GET Logout
exports.logout = async (req, res) => {
  const locals = {
    title: 'Logout - SeasonServe',
    description: 'Volunteering Opportunities Website'
  }
  res.render('logout', locals);
}

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

