let express = require("express")
const app = express();
//Activity 22
const path = require('path');
const api = require('./routes/index');

const PORT = 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);



// GET Route for Notes page
app.get('/notes', (req, res) => {
    console.log("HIT")
    res.sendFile(path.join(__dirname, './public/notes.html'));

});
/// GET Route for homepage
app.get("/", (req, res) => {
    console.log("Back to homepage")
    res.sendFile(path.join(__dirname, "/public/index.html"))
});


// app.post ('./ ')


// bind and listen the connections on the specified host and port.
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);