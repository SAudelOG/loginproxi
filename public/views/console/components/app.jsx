'use strict'

var React = require('react');

module.exports = React.createClass({
  handleDetailClick: function(){
    window.location = "/console/app/" + this.props.appID;
  },
  componentDidUpdate: function(){
    /*
     *To update jsclases on MDL
     *A deeper description of the
     *componentHandler is given in
     *https://github.com/jasonmayes/mdl-component-design-pattern
     */
    componentHandler.upgradeDom();
  },
  render: function(){
    var imgStyle = {
      width : "220px",
      height : "140px",
      border : "0" ,
      padding : "20px"
    };
    return(
      <div className = "mdl-cell mdl-cell--6-col">
        <div className = "application_content mdl-shadow--2dp">
          <div className = "bar" >
            <h2 className = "mdl-card__title-text">
              {this.props.appName}
            </h2>
            <div className = "wrapper">
              <button id = { "application-menu-" + this.props.appName}
                className="mdl-button mdl-js-button mdl-button--icon">
                <i className="material-icons">more_vert</i>
              </button>
              <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                htmlFor = { "application-menu-" + this.props.appName }>
                <li onClick = {this.handleDetailClick} className="mdl-menu__item">Details</li>
                <li className="mdl-menu__item">Delete</li>
              </ul>
            </div>
          </div>
          <div className = "background">
            <span className = "application__data">Application ID: {this.props.appID}</span>
          </div>
        </div>
      </div>
      );
    }
});
