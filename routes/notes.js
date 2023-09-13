const express = require('express');

//Initializing the router for this API endpoint
const notes = express.Router();

//Import functions for asynchronous reading and writing to the database
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
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

module.exports = notes;
