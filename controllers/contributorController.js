const Contributor = require('../models/contributors');


exports.getContributors = async (req, res) => {
  res.render('contributors', {
    title: 'Space Exploration Wiki: About Us',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.',
    contributors: {
      name: "String",
  email: "String",
  age: 20,
  inquiry: "String",
  message: "String",
    }
  });
};

exports.searchContributors = async (req, res) => {
    try {
      const contributors = await Contributor.find({});
      res.render('contributors', {
        title: 'Contributors - Space Exploration Wiki',
        description: 'List of all contributors.', // Corrected description
        contributors: contributors
      });
    } catch (err) {
      console.error('Error retrieving contributors:', err);
      res.status(500).send('Error retrieving contributor data.');
    }
  };

exports.submitContributorForm = async (req, res) => {
  try {
    const newContributor = new Contributor(req.body);
    await newContributor.save();
    res.redirect('/contributors');
  } catch (error) {
    console.log(`Could not save contributor: ${error}`);
    res.status(500).send('Failed to save contributor.');
  }
};