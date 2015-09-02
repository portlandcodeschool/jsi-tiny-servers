var express = require('express');
var app = express();

var data = '{"species":"duck", "noise":"quack"}';

var index = process.argv[2] || 'xhr.html';
//deliver client HTML + js:
app.use(express.static(__dirname,{index:index}));

// handle ajax request (simple version):
app.get('/api', function(req,res) {
	res.send(data);
});

app.listen(5000);
console.log("Ready to serve file "+index);
console.log("Direct browser to 'localhost:5000'")
