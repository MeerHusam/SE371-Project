const express = require('express');
const router = express.Router();
const contributorController = require('../controllers/contributorController');

// Submit a contact form
router.post('/submit_contribute_form', contributorController.submitContributorForm);

// Route to fetch all contributors
router.get('/', contributorController.getContributors);

module.exports = router;
