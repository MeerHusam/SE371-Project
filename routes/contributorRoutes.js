const express = require('express');
const router = express.Router();
const contributorController = require('../controllers/contributorController');

// Submit a contact form
router.post('/submit_contact_form', contributorController.submitContactForm);

module.exports = router;
