const Contributor = require('../models/contributors');

exports.submitContactForm = async (req, res) => {
  try {
    const newContributor = new Contributor(req.body);
    await newContributor.save();
    res.redirect('/contributors');
  } catch (error) {
    console.log(`Could not save contributor: ${error}`);
    res.status(500).send('Failed to save contributor.');
  }
};
