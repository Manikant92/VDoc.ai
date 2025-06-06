const express = require("express");
const bodyParser = require("body-parser");
const multer = require('multer');
var upload = multer();


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const port = process.env.port || 80;
app.set('view engine', 'jade');
app.use(express.static('src/public'));
app.use(upload.array());

app.get("/", function (req, res) {
    console.log(req.url + "@" + Date() + " User connected to the homepage");
    res.render('index');
});

// Appplication
app.get("/app", function (req, res) {
    console.log(req.url + "@" + Date() + " User requested to use application");
    res.render('app');
});

 app.post('/getResults', (req, res) => {
    let textResponses = req.body.textResponses;
    // console.log(req.body.textResponses);
    console.log(textResponses);
    let data = "";
    // diagnosis
    res.send(JSON.stringify(textResponses));
});

// Turns on Server
app.listen(port, function () {
    console.log("Server has started running on port: " + port);
});
