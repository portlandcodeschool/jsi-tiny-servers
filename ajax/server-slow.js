var express = require('express');
var app = express();

var chunk1 = '{"species":"duck",',
	chunk2 = ' "noise":"quack"}'

var index = process.argv[2] || 'xhr.html';
//deliver client HTML + js:
app.use(express.static(__dirname,{index:index}));

//deliver slowed response to ajax requests:
app.get('/api', function(req,res) {
	// acknowledge receipt:
	console.log(Date.now(),'received request');
	// delay...
	setTimeout(function() {
		// send first chunk:
		res.writeHead(200,'utf-8');
		res.write(chunk1);
		console.log(Date.now(),'reply started');
		// delay...
		setTimeout(function() {
			// send last chunk:
			res.end(chunk2);
			console.log(Date.now(),'reply finished')
		},1000)
	},1000)
})


app.listen(5000);
console.log("Ready to serve file "+index);
console.log("Direct browser to 'localhost:5000'")
