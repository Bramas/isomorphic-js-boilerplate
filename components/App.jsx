var React = require('react');

var Router = require('react-router');
var PageStore = require('../stores/pageStore');
var Reflux = require("reflux");

var RouteHandler = Router.RouteHandler;
var Link = Router.Link;


module.exports = React.createClass({
  mixins: [Reflux.connect(PageStore,"page")],
  render: function() {
    var title = 'title: '+this.state.page.title;
    return (
      <html lang="ja">
      <head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta charSet="utf8" />
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css" />
      </head>
      <body>
        <div id="app" className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
          <RouteHandler />
        </div>
      </body>
      <script src="bundle.js"></script>
      </html>
    );
  }
});