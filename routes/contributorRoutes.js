const express = require('express');
const router = express.Router();
const contributorController = require('../controllers/contributorController');

// Route to fetch all contributors
router.get('/', contributorController.getAllContributors);

// Submit a contact form
router.post('/submit_contribute_form', contributorController.submitContributorForm);

// Search for a contributor
router.get('/searchContributors', contributorController.searchContributors);

module.exports = router;