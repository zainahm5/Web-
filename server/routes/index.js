const express = require('express');
const router = express.Router();
const Event = require("../models/Events");

const authRoutes = require("./auth"); 
router.use("/", authRoutes); // include auth routes

const mainController = require('../controllers/mainController');
//const eventsController = require('../controllers/eventsController');
//const authRoutes = require('./auth');

// App Routes
router.get('/', mainController.homepage);
router.get('/about', mainController.about);
router.get('/events', mainController.events);
router.get('/details', mainController.details);
router.get('/profile', mainController.profile);
router.get('/signin', mainController.signin);
router.get('/signup', mainController.signup);
router.get('/', mainController.events); 
router.get("/search-events", async (req, res) => {
    try {
        let { query, location } = req.query;
        let searchQuery = {};

        // Build search conditions
        let conditions = [];

        // Search in title or location (substring match)
        if (query) {
            conditions.push({ title: { $regex: query, $options: "i" } });
            conditions.push({ location: { $regex: query, $options: "i" } });
        }

        // Filter by city (if selected)
        if (location && location !== "All") {
            conditions.push({ location: { $regex: location, $options: "i" } });
        }

        // Apply search filters
        if (conditions.length > 0) {
            searchQuery.$or = conditions;
        }

        const events = await Event.find(searchQuery);
        res.json(events);
    } catch (err) {
        console.error("Search error:", err);
        res.status(500).json({ error: "Server error" });
    }
});
//router.get('/events/search', mainController.events); 
module.exports = router;