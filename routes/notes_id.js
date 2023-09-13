const express = require('express');
const { readFromFile, writeToFile } = require('../helpers/fsUtils');

const id = express.Router();

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
    } else {
        console.error('No id that corresponds to any note was passed in the request.')
    }
});

module.exports = id;