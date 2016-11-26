import React from 'react';

const Frontend = () => (
  <div id="frontend" className="slide">
    <div className="container">
      <div className="strip top">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <h1>{ "TECHNOLOGIES.FRONTEND.H" }</h1>
            <p>{ "TECHNOLOGIES.FRONTEND.CONTENT.P1" }</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="body">
            <img ng-src="images/{tool.toLowerCase()}.png" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4>{ "TECHNOLOGIES.FRONTEND.CONTENT.ANGULARJS.H1" }</h4>
            <p>{ "TECHNOLOGIES.FRONTEND.CONTENT.ANGULARJS.P1" }</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4>{ "TECHNOLOGIES.FRONTEND.CONTENT.ANGULARJS.H2" }</h4>
            <p className="fat">{ "TECHNOLOGIES.FRONTEND.CONTENT.ANGULARJS.P2" }</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4>{ "TECHNOLOGIES.FRONTEND.CONTENT.ANGULARJS.H3" }</h4>
            <p>{ "TECHNOLOGIES.FRONTEND.CONTENT.ANGULARJS.P3" }</p>
          </div>
        </div>
      </div>   
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="body">
            <img ng-src="images/{tool.toLowerCase()}.png" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4>{ "TECHNOLOGIES.FRONTEND.CONTENT.REACT.H1" }</h4>
            <p>{ "TECHNOLOGIES.FRONTEND.CONTENT.REACT.P1" }</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4>{ "TECHNOLOGIES.FRONTEND.CONTENT.REACT.H2" }</h4>
            <p className="fat">{ "TECHNOLOGIES.FRONTEND.CONTENT.REACT.P2" }</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="body">
            <h4>{ "TECHNOLOGIES.FRONTEND.CONTENT.REACT.H3" }</h4>
            <p>{ "TECHNOLOGIES.FRONTEND.CONTENT.REACT.P3" }</p>
          </div>
        </div>
      </div>
      <div className="strip bottom">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
            <p>{ "TECHNOLOGIES.FRONTEND.CONTENT.P2" }</p>
            <p>{ "TECHNOLOGIES.FRONTEND.CONTENT.P3" }</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Frontend;
