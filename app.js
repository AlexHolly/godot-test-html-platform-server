var express = require('express');
var app = express();

app.use(function(req, res, next) {
	res.set("Access-Control-Allow-Methods","POST, GET, DELETE, PUT");
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

var fs = require("fs");

// Make files in ./public accessible
app.use(express.static(__dirname + '/public'));

// start server on the specified port
app.listen(process.env.PORT || 9000, '0.0.0.0', function() {
	console.log("server started");
});


app.get('/',function (req, res) {
	fs.readFile( "public/test.html", 'utf8', function (err, data) {
		res.end( data );
	});
});
