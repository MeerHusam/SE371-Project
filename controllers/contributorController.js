const Contributor = require('../models/contributors');

exports.getAllContributors = async (req, res) => {
  const contributors = await Contributor.find({});
  res.render('contributors', {
    title: 'Space Exploration Wiki: Contributors',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.',
    contributors: contributors
  });
};

exports.searchContributors = async (req, res) => {
  try {
    const searchQuery = req.query.searchQuery;
    const contributors = await Contributor.find({ name: searchQuery });
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