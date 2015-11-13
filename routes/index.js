var express = require('express');
var router = express.Router();

router.get("/", function(req, res)
{
	console.log("Looks like this is working");
	res.render('index');
	
});

console.log("In here");

module.exports = router;