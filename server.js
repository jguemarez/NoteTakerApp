const express = require('express');
const path = require('path');
const { cLog } = require('./middleware/cLog');

const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(cLog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware for endpoints that begin with /api
app.use('/api', api);

//Middleware for static assets
app.use(express.static('public'));

// GET Route for "notes" page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);
// GET route for any other route not specified here or in a middleware function; includes the homepage.
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
