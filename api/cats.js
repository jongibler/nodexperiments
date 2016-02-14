var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var mongoose = require('mongoose');
var Cat = require('../models/Cat.js')

router.get('/', function(req, res) {	
	Cat.find(function(err, cats) {
		if (err)
			res.status(500).send(err);
		res.json(cats);
	});
});

router.post('/', function(req, res) {		
	var kitty = new Cat({ "Name" : req.body.Name });	
	kitty.save(function (err) {
  		if (err)
	  		res.status(500).send(err);
	  	res.json(kitty);
	});
});

module.exports = router;