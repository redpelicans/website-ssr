import React from 'react';

const Nav = ({ xs = 3 }) => (
  <nav>
    <div className="container">
      <div className="row">
        <div className={`col-lg-3 col-md-3 col-sm-3 col-xs-${xs}`}>
          <div>
            <a href="#datavisualization" du-smooth-scroll du-scrollspy offset={115} duration="2000">
              <span className="glyphicon glyphicon-stats"></span>
            </a>
            <h3>{ 'TECHNOLOGIES.DATAVISUALIZATION.H' }</h3>
            <p>{ 'TECHNOLOGIES.DATAVISUALIZATION.P' }</p>
          </div>
        </div>
        <div className={`col-lg-3 col-md-3 col-sm-3 col-xs-${xs}`}>
          <div>
            <a href="#frontend" du-smooth-scroll du-scrollspy offset={115} duration="2000">
              <span className="glyphicon glyphicon-dashboard"></span>
            </a>
            <h3>{ 'TECHNOLOGIES.FRONTEND.H' }</h3>
            <p>{ 'TECHNOLOGIES.FRONTEND.P' }</p>
          </div>
        </div>
        <div className={`col-lg-3 col-md-3 col-sm-3 col-xs-${xs}`}>
          <div>
            <a href="#backend" du-smooth-scroll du-scrollspy offset={115} duration="2000">
              <span className="glyphicon glyphicon-hdd"></span>
            </a>
            <h3>{ 'TECHNOLOGIES.BACKEND.H' }</h3>
            <p>{ 'TECHNOLOGIES.BACKEND.P' }</p>
          </div>
        </div>
        <div className={`col-lg-3 col-md-3 col-sm-3 col-xs-${xs}`}>
          <div>
            <a href="#nosql" du-smooth-scroll du-scrollspy offset={115} duration="2000">
              <span className="glyphicon glyphicon-leaf"></span>
            </a>
            <h3>{ 'TECHNOLOGIES.NOSQL.H' }</h3>
            <p>{ 'TECHNOLOGIES.NOSQL.P' }</p>
          </div>
        </div>
        <i className="line"><i className="cursor"></i></i>
      </div>
    </div>
  </nav>
);

export default Nav;