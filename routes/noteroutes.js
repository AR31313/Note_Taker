// add required modules
const app = require('express').Router();
const fs = require('fs');

const path = require("path");
// Helper method for generating unique ids
const uuid = require("../helpers/uuid");
const api = require('./index');


//define database
const notes = require('../db/db.json');

// GET request for /api/notes url.  Responds with the notes stored in the db.json file.
app.get('/', (req, res) => {
    console.log("notes Route line 16")
    // Send a message to the client
    res.json(notes);

    // Log our request to the terminal
    console.info(`${req.method} request received to get reviews`);
});

// When in the notes directory
// POST request called when client clicks on the save icon

app.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
    // Variable for the object we will save
    const newNote = {
        title,
        text,
        id: uuid(),
    };

    // add the newNote onto the list.
    notes.push(newNote);

    // Convert the data to a string so we can save it (Activity 19)
    const noteString = JSON.stringify(notes);

    // Write the string to a file
    fs.writeFile(`./db/db.json`, noteString, (err) =>
        err
            ? console.error(err)
            : console.info(`${newNote.title} has Successfully been updated!`)
    );

    //response to the client
    const response = {
        status: 'Received new notes',
        body: newNote,
    };
    console.log(response);
    res.status(201).json(response);
});

app.delete('/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params)

    console.log(notes.filter(element => {
        return element.id != req.params.id
    }))

})

//and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved.

module.exports = app