
var ClickActions = require('../actions/clickActions');
var Reflux = require("reflux");

module.exports = Reflux.createStore({
        // this will set up listeners to all publishers in TodoActions, using onKeyname (or keyname) as callbacks
        listenables: [ClickActions],
        onChangePage: function(title) {
            this.currentPage = this.pages[title];
            this.trigger(this.currentPage);
        },
        // this will be called by all listening components as they register their listeners
        getInitialState: function() {
            this.pages = {
                home: {title:"Home", content:"Home content."},
                contact: {title:"Contact", content:"Contact content."}
            };
            this.currentPage = this.pages.home;
            return this.currentPage;
        }
    });