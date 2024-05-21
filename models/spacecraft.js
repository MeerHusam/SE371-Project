const mongoose = require('mongoose');

const spacecraftSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  launchDate: Date,
  mission: String,
  status: String
});

module.exports = mongoose.model('Spacecraft', spacecraftSchema);