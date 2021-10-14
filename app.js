const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


//set server && routes
app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`App listening at ${3000}`);
})