var express = require('express');
var router = express.Router();

router.get("/auth", function(req, res)
{
	res.json({url: process.env.INSTAGRAM_URL});
});

router.get("/callback", function(req, res)
{
	request('http://www.google.com', function (error, response, body) {
	  	if (!error && response.statusCode == 200) {
	    	console.log(body) // Print the google web page.
		}
	});

	var getMedia = function(error, response, body)
	{

	}

	request("https://api.instagram.com/v1/users/self/", getMedia);

	res.render('index');
	
});

console.log("In here");

module.exports = router;