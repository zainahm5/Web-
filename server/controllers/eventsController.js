const Event = require('../models/Events');
const mongoose = require('mongoose');

/**
 * GET /
 * Events
 */
 

exports.events = async (req, res) => {
    try {
        console.log("Fetching events..."); 
        const events = await Event.find({}).limit(5); // Fetch all events   حطيت ليميت عشان مايطول

        if (!events.length) { // Check if no events are found
            console.log("No events found");
        }

        const locals = {
            title: 'Events - SeasonServe',
            description: 'Volunteering Opportunities Website'
        };
        console.log('Events passed to the view:', events);

        res.render('events', {
            locals,
            events
        });
        console.log("Fetched Events:", events);  // Log events to the console

    } catch (error) {
        console.log("Error fetching events:", error);
        res.status(500).send("Error fetching events");  // Respond with an error if something goes wrong
    }
};

