'use strict'

var React = require('react');

//components
var App = require('./app.jsx');

module.exports = React.createClass({
  render: function(){
    var ApplicationsNodes = this.props.applications.map(function(application, index){
      return (
        <App
          key = { index }
          appID = { application.appID }
          appName = { application.appName }
          >
          {application.domain}
        </App>
      );
    })
    return(
      <div className = "mdl-grid">
        {ApplicationsNodes}
      </div>
    );
  }
});
