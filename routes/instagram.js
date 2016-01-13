var express = require('express');
var request = require('request');
var router = express.Router();

router.get("/auth", function(req, res)
{
	res.json({url: process.env.INSTAGRAM_URL});
});

router.get("/callback", function(req, res)
{
	var getMedia = function(error, response, body)
	{
		console.log("Got in here");
		console.log(response);
		if (!error && response.statusCode == 200) {
		    console.log(body); 
		}
		else
		{
			console.log(error);
		}
	}

	request("https://api.instagram.com/v1/users/self/?access_token=22ddbc4e16be4d52a31e6ed38b644d9d" + req.query.code, function(error, response, body)
		{
			console.log("Im here");
		});
	console.log(req.query.code);
	res.render('index');
	
});

module.exports = router;