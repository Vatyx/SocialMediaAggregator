var express = require("express");
var stylus = require('stylus');
var nib = require('nib');
var fs = require('fs');

var routes = require('./routes/index');

var app = express();

app.set('views', __dirname + "/views");
app.set('view engine', 'jade');

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

app.use(stylus.middleware(
  { src: __dirname + '/resources'
  ,	dest: __dirname + '/public'
  , compile: compile
  }
));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

var instagramAccess = "";

app.use('/', routes);

app.set('port', (process.env.PORT) || 3000)	;
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});