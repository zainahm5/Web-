 routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// GET request for the profile page
router.get('/profile', profileController.getProfile);

// POST request to update the profile
router.post('/profile', profileController.updateProfile);

module.exports = router;
