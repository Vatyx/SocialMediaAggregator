require('dotenv').load();
var express = require("express");
var cookieParser = require('cookie-parser'); 
var stylus = require('stylus');
var nib = require('nib');
var fs = require('fs');

var routes = require('./routes/index');
var instagram_routes = require('./routes/instagram');

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

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

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

var instagramAccess = "";

app.use('/', routes);
app.use('/instagram', instagram_routes);

app.set('port', (process.env.PORT) || 3000)	;
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});