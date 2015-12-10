var express = require('express');
var router = express.Router();

var instagramOauth2 = require('simple-oauth2')(
{
	clientID: "ad894ecb14cb4928bd00f5e4d8c2ae67",
	clientSecret: "b5deae6b21be45259ccdd272998a2651",
	site: 'https://instagram.com'
});

var instagram_authorization_uri = oauth2.authCode.authorizeURL(
{
	redirect_uri: 'http://localhost:3000/instagram_callback',
	response_type: 'code'
});


router.get("/instagram", function(req, res)
{
	res.render('index');
	
});

console.log("In here");

fs.writeFile('instagramkey.txt', 'test', function(err, data)
{
	consolelog(data);n
});

module.exports = router;