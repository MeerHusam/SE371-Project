const Spacecraft = require('../models/spacecraft');

exports.getAllSpacecrafts = async (req, res) => {
  try {
    const spacecrafts = await Spacecraft.find({});
    console.log("print in getallspacecraftds");
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

// exports.getSpacecraft = async (req, res) => {
//   try {
//     // const spacecraft = await Spacecraft.findById(req.params.name);
//     const spacecraft = await Spacecraft.findById(req._id);

//     console.log(req.params);
//     console.log(spacecraft);


//     res.render('spacecraft', {
//       title: 'Detail - Space Exploration Wiki',
//       description: 'Detail of spacecraft.',
//       spacecrafts: spacecraft
//     });
//   } catch (err) {
//     console.error('Error retrieving spacecraft:', err);
//     res.status(500).send('Error retrieving spacecraft data.');
//   }
// };

// exports.getSpacecraftByName = async (req, res) => {
//   try {
//     // Accessing name passed as a URL parameter
//     const spacecraftName = req.params.name;
//     const spacecraft = await Spacecraft.findOne({ name: spacecraftName });

//     console.log(req.params); // Debugging output to see what parameters are received
//     console.log(spacecraft); // Debugging output to log the spacecraft object found

//     res.render('spacecraft', {
//       title: `Detail - ${spacecraftName}`,
//       description: `Detail of ${spacecraftName}.`,
//       spacecraft: spacecraft // Passing the spacecraft object to the view
//     });
//   } catch (err) {
//     console.error('Error retrieving spacecraft by name:', err);
//     res.status(500).send('Error retrieving spacecraft data.');
//   }
// };

exports.getSpacecraftByQuery = async (req, res) => {
  try {
    // Extracting the search query from the URL query string
    const searchQuery = req.query.searchQuery;
    const spacecraft = await Spacecraft.findOne({ name: searchQuery });

    console.log('Search Query:', searchQuery); // Debugging output
    console.log('Found Spacecraft:', spacecraft); // Debugging output

    if (!spacecraft) {
      return res.status(404).send('Spacecraft not found.');
    }

    res.render('spacecraft', {
      title: `Detail - ${searchQuery}`,
      description: `Detail of ${searchQuery}.`,
      spacecraft: spacecraft
    });
  } catch (err) {
    console.error('Error retrieving spacecraft by search query:', err);
    res.status(500).send('Error retrieving spacecraft data.');
  }
};

