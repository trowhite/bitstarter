var express = require('express');
var fs = require('fs');
var buf = require('buffer');

var app = express.createServer(express.logger());

var contents = fs.readFileSync('index.html');
//var buffer = new Buffer('test');

app.get('/', function(request, response) {
//  response.send(buffer.toString());
  response.send(contents.toString());
//  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
