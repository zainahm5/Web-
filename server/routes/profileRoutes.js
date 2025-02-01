// In profileRoutes.js
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { isLoggedIn } = require('../middleware/checkAuth');  // Import the middleware
const { profile, updateProfile } = require("../controllers/mainController");

router.get('/profile', isLoggedIn, profileController.getProfile);
router.post("/profile/update", isLoggedIn, updateProfile);
module.exports = router;
