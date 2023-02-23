var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hellooo woorld!');
});

app.get('/list', function (req, res) {
    res.send('Listing data from a file');
});

app.get('/add', function (req, res) {
    res.send('Lets try to add some data to a file');
});

app.get('*', function (req, res) {
    res.send('Cant find the requested page', 404);
});

app.listen(8020, function() {
    console.log('Example app listening on port 8020!');
});