const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const spacecraftRoutes = require('./routes/spacecraftRoutes');
const contributorRoutes = require('./routes/contributorRoutes');

require("dotenv").config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const data = require('./public/js/data.js');
const Contributor = require('./models/contributors');
const Spacecraft = require('./models/spacecraft');


app.use('/spacecraft', spacecraftRoutes);
app.use('/spacecraft', spacecraftRoutes);
app.use('/contributors', contributorRoutes);
app.use('/contributors/submit_contribute_form', contributorRoutes);
app.use('/contributors/search_contributor', contributorRoutes);


app.get('/', (req, res) => {
  res.render('index', {
    title: 'Space Exploration Wiki: Home Page',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Space Exploration Wiki: About Us',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.'
  });
});

app.get('/contributors', (req, res) => {
  res.render('contributors', {
    title: 'Space Exploration Wiki: About Us',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.'
  });
});

app.get('/future', (req, res) => {
  res.render('future', {
    title: 'Space Exploration Wiki: Future',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.'
  });
});

app.get('/history', (req, res) => {
  res.render('history', {
    title: 'Space Exploration Wiki: History',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.'
  });
});

app.get('/missions', (req, res) => {
  res.render('missions', {
    title: 'Space Exploration Wiki: Missions',
    description: 'A comprehensive resource for space exploration history, technology, missions, and the future of interstellar travel.'
  });
});

// Start the server
mongoose.connect(process.env.MONGO_URI)
        .then((result) => { 
          console.log('Connected to database...');
          initializeSpacecraftData();
          app.listen(process.env.PORT, () => { 
            console.log(`Listening on port ${process.env.PORT}...`);
          });
        })
        .catch((err) => {console.log(err); });

        const initializeSpacecraftData = async () => {
          try {
            // Insert data while ignoring duplicates
            const results = await Spacecraft.insertMany(data, { ordered: false });
            console.log('Inserted data successfully:', results);
          } catch (error) {
            // Handle the error if it's not a duplicate error
            if (error.code !== 11000) { // 11000 is the code for duplicate key error
              console.error('Error inserting spacecraft data:', error);
            } else {
              console.log('Some duplicates were ignored during the insertion.');
            }
          }
        };
        