// require all dependencies
var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './')));

// start up the server
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});
 