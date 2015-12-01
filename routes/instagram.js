var express = require('express');
var router = express.Router();

router.get('/instagram_url', function(req, res)
{
	res.send();
});

router.get("/instagram_callback", function(req, res)
{
	code = req.query.code;
	res.render('index');
	console.log(code);
	
});

router.get("/what", function(req, res)
{
	res.send("Hi");
});

router.get("/", function(req, res)
{
	res.send("default");
});

module.exports = router;