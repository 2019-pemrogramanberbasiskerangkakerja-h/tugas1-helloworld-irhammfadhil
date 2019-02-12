var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send("<html><h1>Hello World</h1><br><p>Irham Muhammad F</p><br><p>05111640000085</p></html>");
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});