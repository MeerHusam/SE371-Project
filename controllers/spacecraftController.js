const Spacecraft = require('../models/spacecraft');

exports.getAllSpacecrafts = async (req, res) => {
  try {
    const spacecrafts = await Spacecraft.find({});
    res.render('spacecraft', {
      title: 'Spacecraft - Space Exploration Wiki',
      description: 'List of all spacecrafts.',
      spacecrafts: spacecrafts
    });
  } catch (err) {
    console.error('Error retrieving spacecrafts:', err);
    res.status(500).send('Error retrieving spacecraft data.');
  }
};

exports.getSpacecraft = async (req, res) => {
  try {
    const spacecraft = await Spacecraft.findById(req.params.id);
    res.render('spacecraft', {
      title: 'Detail - Space Exploration Wiki',
      description: 'Detail of spacecraft.',
      spacecraft: spacecraft
    });
  } catch (err) {
    console.error('Error retrieving spacecraft:', err);
    res.status(500).send('Error retrieving spacecraft data.');
  }
};
