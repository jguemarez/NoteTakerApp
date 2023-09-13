//Requiring the Express.js module
const express = require('express');

//Import functions for asynchronous reading and writing to the database
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

//Import the v4 (renamed uuidv4 for mnemotecnic purposes) function to assign universally unique ids to the saved notes
const { v4: uuidv4 } = require('uuid');

//Initializing the router for this API endpoint
const notes = express.Router();

// GET route for retrieving all the notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for a saving a new note into the database
notes.post('/', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');

    res.json(`Note added successfully to database file`);
  } else {
    console.error('There was an error writing the note.');
  }
});

// Exporting the router
module.exports = notes;
