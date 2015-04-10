'use strict';

var express = require('express');
require('node-jsx').install({extension: '.jsx'})
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var app = express();

app.get('/favicon.ico', function(req, res) { res.send('') });

app.use(express.static('public'));

app.use(function(req, res)  {
  Router.run(routes, req.path, function(Handler)  {
    res.send(React.renderToString(React.createElement(Handler, {path: req.path})));
  });
});

var port = process.env.PORT || 5000;
console.log("listening..." + port);
app.listen(port);