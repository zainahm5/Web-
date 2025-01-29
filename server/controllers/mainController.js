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
  res.render('signin', 
    {locals, 
    layout: '../views/layouts/sign'});
}

// GET Sign Up
exports.signup = async (req, res) => {
  const locals = {
    title: 'Sign Up - SeasonServe',
    description: 'Volunteering Opportunities Website'
  }
  res.render('signup', 
    {locals, 
    layout: '../views/layouts/sign'});
}


// GET Logout
exports.logout = async (req, res) => {
  const locals = {
    title: 'Logout - SeasonServe',
    description: 'Volunteering Opportunities Website'
  }
  res.render('logout', locals);
}