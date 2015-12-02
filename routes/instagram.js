var express = require('express');
var router = express.Router();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'process.env.INSTAGRAM_URL');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

router.get('/auth', function(req, res)
{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.redirect(process.env.INSTAGRAM_URL);
});

router.get("/callback", function(req, res)
{
	code = req.query.code;
	res.render('index');
	console.log(code);
	
});

module.exports = router;