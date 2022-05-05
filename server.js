// define server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// add required modules
const fs = require('fs');
const path = require("path");
// Helper method for generating unique ids
// const uuid = require("./helpers/uuid");

// define middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));//??*ASK*
app.use(express.static(__dirname + "/public"));


//define database
// GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get('/notes', (req, res) => {
    console.log("HIT")
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// GET Route for the /notes url.  loads the notes.html page.

// GET method for /api/notes url.  Responds with the notes stored in the db.json file.



//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, 
//and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved.

// bind and listen the connections on the specified host and port.
app.listen(PORT, () => { console.log(PORT) })
