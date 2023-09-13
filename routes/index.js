// Requiring the Express built-in module
const express = require('express');

//Requiring the routers for the endpoints that start with /api
const notesRouter = require('./notes');
const idRouter = require('./notes_id');

//Initializing the app as an instance of express
const api = express();

//Middleware to handle the bifurcating routes
api.use('/notes', notesRouter);
api.use('/notes/:id', idRouter);

//Export the module's app for use by the main app in server.js
module.exports = api;
