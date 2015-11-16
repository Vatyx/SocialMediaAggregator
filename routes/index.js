var express = require('express');
var router = express.Router();

router.get("/", function(req, res)
{
	res.render('index');
	
});

console.log("In here");

module.exports = router;