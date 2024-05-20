const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  inquiry: String,
  message: String,
  consent: Boolean
});

module.exports = mongoose.model('Contact', contactSchema);
