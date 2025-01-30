require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const connectDB = require('./server/config/db');

const app = express();
const port = 3000 || process.env.PORT;

// Connect to the database
connectDB();

const passport = require("passport");
const session = require("express-session");

// Session middleware
app.use(session({
  secret: "SeasonServe", // Secret string for local development
  resave: false,
  saveUninitialized: true
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static('public'));

// Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/index'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

// Use the profile routes
app.use('/', profileRoutes);
// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // For parsing form data
