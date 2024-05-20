const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

require("dotenv").config();
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


// Define your routes here
const Spacecraft = require('./models/spacecraft');
const Contact = require('./models/contact');

// Home route
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Space Exploration Wiki: Space Crafts',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.'
  });
});

// Add spacecraft route (GET)
app.get('/spacecraft', (req, res) => {
  res.render('spacecraft', {
    title: 'Space Exploration Wiki: Space Crafts',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.'
  });
});

// Contact route
app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Space Exploration Wiki: Contact Us',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Space Exploration Wiki: Space Crafts',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.'
  });
});

app.get('/future', (req, res) => {
  res.render('future', {
    title: 'Space Exploration Wiki: Space Crafts',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.'
  });
});

app.get('/history', (req, res) => {
  res.render('history', {
    title: 'Space Exploration Wiki: Space Crafts',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.'
  });
});

app.get('/missions', (req, res) => {
  res.render('missions', {
    title: 'Space Exploration Wiki: Space Crafts',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.'
  });
});



// Contact form submission route
app.post('/submit_contact_form', (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    inquiry: req.body.inquiry,
    message: req.body.message,
    consent: req.body.consent
  });

  newContact.save()
    .then(result => {
      response.redirect('/contact');
    })
    .catch(error => {
      console.log(`Could not save company object into database: ${error}`);
      response.redirect('/contact');
    })
});

// Spacecraft search form submission route
app.post('/spacecraft', (req, res) => {
  const query = req.body.searchQuery;
  Spacecraft.find({ name: new RegExp(query, 'i') }, (err, foundSpacecrafts) => {
    if (!err) {
      res.render('spacecraft', { spacecrafts: foundSpacecrafts });
    } else {
      res.send(err);
    }
  });
});


// Start the server
mongoose.connect(process.env.MONGO_URI)
        .then((result) => { 
          console.log('Connected to database...');
          app.listen(process.env.PORT, () => { 
            console.log(`Listening on port ${process.env.PORT}...`);
          });
        })
        .catch((err) => {console.log(err); });
