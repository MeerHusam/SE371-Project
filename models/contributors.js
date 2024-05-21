const mongoose = require('mongoose');

const contributorSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  inquiry: String,
  message: String,
  consent: Boolean
});

module.exports = mongoose.model('Contributor', contributorSchema);
