const express = require('express');
const router = express.Router();
const spacecraftController = require('../controllers/spacecraftController');

// Get all spacecrafts
router.get('/', spacecraftController.getAllSpacecrafts);

// Get a specific spacecraft
router.get('/:id', spacecraftController.getSpacecraft);

module.exports = router;
