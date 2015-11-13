/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')


var app = express()

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}

app.set('views', __dirname + '/views')
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index.html');
  
})

app.listen(3000)

// var express = require("express");
// var stylus = require('stylus');
// var nib = require('nib');

// var app = express();

// function compile(str, path) {
//   return stylus(str)
//     .set('filename', path)
//     .use(nib());
// }

// app.use(stylus.middleware(
//   { src: __dirname + '/public'
//   , compile: compile
//   }
// ));

// app.use('/bower_components',  express.static(__dirname + '/bower_components'));
// app.use(express.static(__dirname + '/public'));

// app.get("/", function(req, res)
// {
// 	res.render('index.html');
// });

// app.set('port', (process.env.PORT) || 5000)	;
// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });