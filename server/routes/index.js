const express = require('express');
const router = express.Router();
const homeController = require('../controllers/mainController');

router.get('/', mainController.getHomePage);

module.exports = router;
