import React from 'react';

const Consulting2 = () => (
  <div className="light-grey slide">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12">
          <h2 className="text-center">{ "HOME.CONSULTING2.H" }</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-6">
          <div className="head">
            <span className="glyphicon glyphicon-wrench"></span>
          </div>
          <div className="body">
            <h3>{ "HOME.CONSULTING2.CONTENT.H1" }</h3>
            <p>{ "HOME.CONSULTING2.CONTENT.P1" }</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 hidden-xs hidden-sm">
          <div className="head invisible">
            <span className="glyphicon glyphicon-envelope"></span>
          </div>
          <div className="body">
            <br /><br /><br />
            <a href="mailto:contact@redpelicans.com" className="fade-link">{ 'CONTACTUS' }</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-6">
          <div className="head">
            <span className="glyphicon glyphicon-flag"></span>
          </div>
          <div className="body">
            <h3>{ "HOME.CONSULTING2.CONTENT.H2" }</h3>
            <p>{ "HOME.CONSULTING2.CONTENT.P2" }</p>
          </div>
        </div>
        <div className="col-xs-12 visible-xs col-sm-12 visible-sm">
          <a href="mailto:contact@redpelicans.com" className="fade-link">{ 'CONTACTUS' }</a>
        </div>
      </div>
    </div>
  </div>
);

export default Consulting2;
