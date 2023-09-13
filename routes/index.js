const express = require('express');


const notesRouter = require('./notes');
const idRouter = require('./notes_id');

const api = express();

api.use('/notes', notesRouter);
api.use('/notes/:id', idRouter);

module.exports = api;
