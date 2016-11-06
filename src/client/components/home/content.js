import React from 'react';

const Content = () => (
  <div className="content">
    <div className="container hidden-xs hidden-sm">
      <div className="row">
        <div className="col-lg-3 col-md-3 hex partial-dark-grey">
          <div>
            <p>{ 'HOME.FRONTEND.P' }</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-dashboard"></span></h4>
            <h3>{ 'HOME.FRONTEND.H' }</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-stats"></span></h4>
            <h3>{ 'HOME.DATAVISUALIZATION.H' }</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex partial-dark-grey">
          <div>
            <p>{ 'HOME.DATAVISUALIZATION.P' }</p>
          </div>
        </div>
      </div>
      <div className="center-row">
        <div className="row">
          <div className="col-lg-9 col-md-9 center-block">
            <div className="row">
              <div className="col-lg-4 col-md-4 hex partial-red">
                <div>
                  <p>{ 'HOME.CONSULTING.P1' }</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 hex full-red">
                <div>
                  <h4><span className="glyphicon glyphicon-send"></span></h4>
                  <h3>{ 'HOME.CONSULTING.H' }</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 hex partial-red">
                <div>
                  <p>{ 'HOME.CONSULTING.P2' }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-3 hex partial-dark-grey">
          <div>
            <p>{ 'HOME.BACKEND.P' }</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-hdd"></span></h4>
            <h3>{ 'HOME.BACKEND.H' }</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-leaf"></span></h4>
            <h3>{ 'HOME.NOSQL.H' }</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex partial-dark-grey">
          <div>
            <p>{ 'HOME.NOSQL.P' }</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container visible-sm">
      <div className="row">
        <div className="col-sm-5 col-sm-offset-1 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-dashboard"></span></h4>
            <h3>{ 'HOME.FRONTEND.H' }</h3>
            <p>{ 'HOME.FRONTEND.P' }</p>
          </div>
        </div>
        <div className="col-sm-5 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-stats"></span></h4>
            <h3>{ 'HOME.DATAVISUALIZATION.H' }</h3>
            <p>{ 'HOME.DATAVISUALIZATION.P' }</p>
          </div>
        </div>
      </div>
      <div className="center-row">
        <div className="row">
          <div className="col-sm-5 center-block">
            <div className="row">
              <div className="col-sm-12 hex full-red">
                <div>
                  <h4><span className="glyphicon glyphicon-send"></span></h4>
                  <h3>{ 'HOME.CONSULTING.H' }</h3>
                  <p>{ 'HOME.CONSULTING.P1' }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5 col-sm-offset-1 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-hdd"></span></h4>
            <h3>{ 'HOME.BACKEND.H' }</h3>
            <p>{ 'HOME.BACKEND.P' }</p>
          </div>
        </div>
        <div className="col-sm-5 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-leaf"></span></h4>
            <h3>{ 'HOME.NOSQL.H' }</h3>
            <p>{ 'HOME.NOSQL.P' }</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container visible-xs">
      <div className="row">
        <div className="col-xs-12 center-block hex full-dark-grey">
          <div className="fat">
            <h4><span className="glyphicon glyphicon-dashboard"></span></h4>
            <h3>{ 'HOME.FRONTEND.H' }</h3>
            <p className="thin">{ 'HOME.FRONTEND.P' }</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 center-block hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-stats"></span></h4>
            <h3>{ 'HOME.DATAVISUALIZATION.H' }</h3>
            <p>{ 'HOME.DATAVISUALIZATION.P' }</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 center-block hex full-red">
          <div className="fat">
            <h4><span className="glyphicon glyphicon-send"></span></h4>
            <h3>{ 'HOME.CONSULTING.H' }</h3>
            <p>{ 'HOME.CONSULTING.P1' }</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 center-block hex full-dark-grey">
          <div className="fat">
            <h4><span className="glyphicon glyphicon-hdd"></span></h4>
            <h3>{ 'HOME.BACKEND.H' }</h3>
            <p>{ 'HOME.BACKEND.P' }</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 center-block hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-leaf"></span></h4>
            <h3>{ 'HOME.NOSQL.H' }</h3>
            <p>{ 'HOME.NOSQL.P' }</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Content;
