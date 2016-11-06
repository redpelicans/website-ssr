import React from 'react';

const Hiring = () => (
  <div id="hiring" className="grey slide">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12">
          <h2 className="text-center">{ "HOME.HIRING.H" }</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12">
          <div className="head">
            <span className="glyphicon glyphicon-tree-deciduous"></span>
          </div>
          <div className="body">
            <h3>{ "HOME.HIRING.CONTENT.H" }</h3>
            <p>{ "HOME.HIRING.CONTENT.P" }</p>
            <a href="mailto:contact@redpelicans.com" className="fade-link">{ 'APPLYNOW' }</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hiring;
