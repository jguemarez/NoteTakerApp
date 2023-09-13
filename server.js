//Importing Express.js
const express = require('express');

//Importing the 'path' built-in module in order to employ the 'join' method  when sending files in the response object
const path = require('path');

//Importing custom middleware function that uses text and color-coding to keep track about the types of fetch requests done to the app's endpoints
const { cLog } = require('./middleware/cLog');

//Importing the 'api' app that will serve as intermediary between the app initialized in this module and the routers that handle get, post, and delete requests involving the database
const api = require('./routes/index.js');

// Declaring and assigning value to the "port" variable in a way that is compatible with deployment on Heroku (Using the value of the global environment variable PORT)
const port = process.env.PORT || 3001;

//Initializing the app as an instance of express.
const app = express();

// Adding custom middleware "cLog" to the middleware stack
app.use(cLog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware that serves as intermediary for endpoints that begin with /api
app.use('/api', api);

//Middleware for serving static assets
app.use(express.static('public'));

// GET Route for "notes" page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// GET route for any other route not specified here or in a middleware function; includes the homepage.
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

//Tell the server to start listening at the specified port
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
