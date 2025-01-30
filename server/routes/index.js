const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const eventsController = require('../controllers/eventsController');

// App Routes
router.get('/', mainController.homepage);
router.get('/about', mainController.about);
router.get('/events', mainController.events);
router.get('/details', mainController.details);
router.get('/profile', mainController.profile);
router.get('/signin', mainController.signin);
router.get('/signup', mainController.signup);
router.get('/logout', mainController.logout);
router.get('/events', eventsController.events); 
module.exports = router;