const Spacecraft = require('../models/spacecraft');

exports.getAllSpacecrafts = async (req, res) => {
  try {
    // const searchQuery = req.query.searchQuery;
    // console.log("in all sopacecrafts");
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

exports.getSpacecraftByQuery = async (req, res) => {
  try {
    const searchQuery = req.query.searchQuery;
    const spacecraft = await Spacecraft.find({ name: searchQuery });

    if (!spacecraft) {
      return res.status(404).send('Spacecraft not found.');
    }

    res.render('spacecraft', {
      title: `Detail - ${searchQuery}`,
      description: `Detail of ${searchQuery}.`,
      spacecrafts: spacecraft
    });
  } catch (err) {
    console.error('Error retrieving spacecraft by search query:', err);
    res.status(500).send('Error retrieving spacecraft data.');
  }
};