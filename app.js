require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
//const profileRoutes = require('./server/routes/profileRoutes');
const bodyParser = require('body-parser');
const connectDB = require('./server/config/db');
const Events = require('./server/models/Events'); 

const app = express();
const port = 3000 || process.env.PORT;

// Connect to the database
connectDB();

const passport = require("passport");
require("./server/config/passport");
const session = require("express-session");

// Session middleware
app.use(session({
  secret: "SeasonServe", // Secret string for 'local' development
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
app.use('/', require('./server/routes/dashboard'));
//app.use('/events', require('./server/routes/events'));

// Use the profile routes
//app.use('/', profileRoutes);
// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // For parsing form data
app.use(bodyParser.json());

app.get('/event/:id', async (req, res) => {
  const eventId = req.params.id;

  try {
    // Fetch the event from the database using the ID
    const event = await Events.findById(eventId);

    if (!event) {
      return res.status(404).send("Event not found");
    }

    // Pass the event data to the details page
    res.render('details', { event });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving event");
  }
});

// Handle 404
app.get('*', function(req, res) {
  res.status(404).render('404');
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});