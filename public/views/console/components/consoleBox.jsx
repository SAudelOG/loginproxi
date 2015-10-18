'use strict'

//libs
var React = require('react');
var $ = require('jquery');


//components
var CreateAppForm = require('./createApplicationForm.jsx');
var AppList = require('./appList.jsx');

module.exports = React.createClass({
  fetchAppsFromServer: function(){
    $.ajax({
      url: this.props.fetchAppsUrl,
      dataType: 'json',
      cache:false,
      success:function(data){
        this.setState({applications:data.applications});
      }.bind(this),
      error: function(xhr, statu, err){
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCreateAppSubmit: function(application, url){
    //don´t wait untill the request complete
    //instead set state directly and render de applications
    var applications = this.state.applications;
    var newApplications = applications.concat([application]);
    this.setState({applications: newApplications});

    $.ajax({
      type: 'Post',
      url: url,
      dataType: 'json',
      data: application,
      success: function(data){
        this.setState({applications:data.applications});
      }.bind(this),
      erorr: function(xhr, status, err){
        console.log(url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function(){
    return {
      applications:[]
    };
  },
  componentDidMount: function(){
    this.fetchAppsFromServer();
    //TODO: implement technology to fetch data
    //only when a new app is created
    //setInterval(this.fetchAppsFromServer, this.props.pollInterval)
  },
  render: function(){
    return(
      <div>
        <div className="mdl-grid">
          <div className="createAppForm mdl-cell mdl-cell--6-col">
            <CreateAppForm onCreateAppSubmit={this.handleCreateAppSubmit} createAppUrl="/Application" />
          </div>
        </div>
        <div className = "">
          <h1>Applications</h1>
          <AppList applications={this.state.applications}/>
        </div>
      </div>
    );
  }
});
