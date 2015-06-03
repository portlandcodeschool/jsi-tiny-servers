var express = require('express');
var router = express.Router();
var app = require('../app')

router.get('/', function(req,res,next) {
	if (req.cookies.flavor) {
		console.log('Yum, '+req.cookies.flavor);
	} else {
		res.cookie('flavor','banana');
	}
	res.render
});

module.exports = router;
