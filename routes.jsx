var React = require('react');
var App = require('./components/App');
var Test = require('./components/Test');
var Home = require('./components/Home');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

module.exports = (
    <Route name="top" handler={App} path="/">
      <Route name="contact"  handler={Test} />
      <DefaultRoute handler={Home} />
    </Route>
)