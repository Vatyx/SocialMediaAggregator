var express = require("express");
var stylus = require('stylus');
var nib = require('nib');

var app = express();

function compile(str, path)
{
	return stylus(str)
		.set('filename', path)
		.set('compress', true)
		.use(nib());
}

app.set('port', (process.env.PORT) || 5000)	;
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use(stylus.middleware(
	{	
		src: __direname + '/public'
	,	compile: compile
	}
))

app.get("/", function(req, res)
{
	res.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});