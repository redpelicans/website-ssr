import React from 'react';

const Devops = () => (
  <div className="grey slide devops">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12">
          <h2 className="text-center">{ "HOME.DEVOPS.H1" }</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 visible-xs col-sm-12 visible-sm">
          <div className="body">
            <span className="glyphicon glyphicon-cloud-upload"></span>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-xs-12 col-sm-6">
          <div className="body">
            <h3>{ "HOME.DEVOPS.CONTENT.H1" }</h3>
            <p>{ "HOME.DEVOPS.CONTENT.P1" }</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 hidden-xs hidden-sm">
          <div className="head invisible">
            <span className="glyphicon glyphicon-cloud-upload"></span>
          </div>
          <div className="body">
            <br /><br />
            <span className="glyphicon glyphicon-cloud-upload"></span>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-xs-12 col-sm-6">
          <div className="body">
            <h3>{ "HOME.DEVOPS.CONTENT.H2" }</h3>
            <p>{ "HOME.DEVOPS.CONTENT.P2" }</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12">
          <h2 className="text-center">{ "HOME.DEVOPS.H2" }</h2>
        </div>
      </div>
    </div>
  </div>
);

export default Devops;
