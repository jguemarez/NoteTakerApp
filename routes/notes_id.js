// Importing the express modulethe 
const express = require('express');

//Importing the following two functions from the public interface of fsUtils 
const { readFromFile, writeToFile } = require('../helpers/fsUtils');

//Initializing the router for /api/notes/:id
const id = express.Router();

//Handle delete request to erase some note entered through the app's interface from the database.
id.delete('/', (req,res) =>{

    if(req.body.id){ 
        const ID = req.body.id;
        readFromFile('./db/db.json').then((data)=>{ console.log(data); 
            const parsedData = JSON.parse(data);
            const newData = parsedData.filter(note => note.id !== ID);
            writeToFile('./db/db.json', newData);
        })
        .catch((err) => console.error(err));
        res.json(`Note with id ${ID} was successfully deleted.`);
        return;
    } else {
        console.error('No id that corresponds to any note was passed in the request.')
    }
});

//Exporting the router
module.exports = id;