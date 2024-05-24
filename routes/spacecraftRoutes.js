const express = require('express');
const router = express.Router();
const spacecraftController = require('../controllers/spacecraftController');

// Get All Spacecrafts
router.get('/', spacecraftController.getAllSpacecrafts);

// Get Specific Spacecrafts
router.get('/search', spacecraftController.getSpacecraftByQuery);

module.exports = router;