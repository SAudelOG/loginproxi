'use strict'

//libs
var React = require('react');

//components
var ConsoleBox = require('./components/consoleBox.jsx');

module.exports = React.createClass({
  displayName: 'console',
  render:function render(){
    return(
      <div className="container">
        <ConsoleBox fetchAppsUrl="/Applications" pollInterval={9000} />
      </div>
    )
  }
});
