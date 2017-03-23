var express = require('express');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(8000, function() {
    console.log("3tapz project. Listening on 8000.");

});
