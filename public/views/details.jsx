'use strict';

var Layout = require('./layout.jsx');
var React = require('react');

module.exports = React.createClass({

  render: function render() {

    return (
      <div>
        <h3>Lets show details!!!!</h3>
        <span>Application ID: {this.props.appId}</span>
      </div>
    );
  }
});
