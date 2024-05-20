const mongoose = require('mongoose');

const spacecraftSchema = new mongoose.Schema({
  name: String,
  launchDate: Date,
  mission: String,
  status: String
});

module.exports = mongoose.model('Spacecraft', spacecraftSchema);