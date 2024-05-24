const express = require('express');
const router = express.Router();
const spacecraftController = require('../controllers/spacecraftController');

// Get a specific spacecraft
router.get('/spacecraft', spacecraftController.getSpacecraftByQuery);

// Get all spacecrafts
router.get('/', spacecraftController.getAllSpacecrafts);


module.exports = router;
