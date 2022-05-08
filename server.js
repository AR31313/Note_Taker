// define server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// add required modules
const fs = require('fs');
const path = require("path");
// Helper method for generating unique ids
// const uuid = require("./helpers/uuid");
const api = express.Router();

// define middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));


//define database
const notes = require('./db/db.json');

// GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get('/notes', (req, res) => {
    console.log("HIT")
    res.sendFile(path.join(__dirname, '/public/notes.html'));

});
app.get("/index", (req, res) => {
    console.log("Back to homepage")
    res.sendFile(path.join(__dirname, "/public/index.html"))
});
// GET method for /api/notes url.  Responds with the notes stored in the db.json file.

// When in the notes directory
// POST request called when client clicks on the save icon

app.post('/api/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
    // Variable for the object we will save
    const newNote = {
        title,
        text,
        id: uuidv4(),
    };

    // add the newNote onto the list.
    notes.push(newNote);

    // Convert the data to a string so we can save it (Activity 19)
    const noteString = JSON.stringify(notes);

    // Write the string to a file
    fs.writeFile(`./db/${newNote.title}.json`, noteString, (err) =>
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



//and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved.

// bind and listen the connections on the specified host and port.
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
