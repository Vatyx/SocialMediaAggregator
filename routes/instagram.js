var express = require('express');
var router = express.Router();

router.get("/instagram_callback", function(req, res)
{
	code = req.query.code;
	res.render('index');
	
});

console.log("In here");

fs.writeFile('instagramkey.txt', 'test', function(err, data)
{
	console.log(data);
});

module.exports = router;