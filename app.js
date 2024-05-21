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

app.use('/spacecraft', spacecraftRoutes);
app.use('/contributors', contributorRoutes);
const data = require('./public/js/data.js');


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



// // Contact form submission route
// app.post('/submit_contribute_form', (req, res) => {
//   const newContributor = new Contributor({
//     name: req.body.name,
//     email: req.body.email,
//     age: req.body.age,
//     inquiry: req.body.inquiry,
//     message: req.body.message,
//     consent: req.body.consent
//   });

//   newContributor.save()
//     .then(result => {
//       response.redirect('/contributors');
//     })
//     .catch(error => {
//       console.log(`Could not save company object into database: ${error}`);
//       response.redirect('/contributors');
//     })
// });

// // Spacecraft search form submission route
// app.get('/spacecraft', async (req, res) => {
//   try {
//     const spacecrafts = await Spacecraft.find({});
//     res.render('spacecraft', {
//       title: 'Spacecraft - Space Exploration Wiki',
//       description: 'List of all spacecrafts.',
//       spacecrafts: spacecrafts
//     });
//   } catch (err) {
//     console.error('Error retrieving spacecrafts:', err);
//     res.status(500).send('Error retrieving spacecraft data.');
//   }
// });

// app.get('/contributors', async (req, res) => {
//   try {
//     const contributors = await Contributor.find({});
//     res.render('contributors', {
//       title: 'Contributors - Space Exploration Wiki',
//       description: 'List of all spacecrafts.',
//       contributors: contributors
//     });
//   } catch (err) {
//     console.error('Error retrieving spacecrafts:', err);
//     res.status(500).send('Error retrieving spacecraft data.');
//   }
// });


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
        