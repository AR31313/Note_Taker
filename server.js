//Activity 22
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


/// GET Route for homepage
app.get("/index", (req, res) => {
    console.log("Back to homepage")
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

// GET Route for Notes page
app.get('/notes', (req, res) => {
    console.log("HIT")
    res.sendFile(path.join(__dirname, '/public/notes.html'));

});

// bind and listen the connections on the specified host and port.
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
