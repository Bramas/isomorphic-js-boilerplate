var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(React.createElement(Handler, {path: window.location.pathname}), document);
});