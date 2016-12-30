import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const HexagonInner = ({ icon, type, isFat=false, isThin=false }) => (
  <div className={isFat ? 'fat' : ''}>
    <h4><span className={`glyphicon glyphicon-${icon}`}></span></h4>
    <h3><FormattedMessage id={`home.${type}.h`} /></h3>
    <p className={isThin ? 'thin' : ''}><FormattedHTMLMessage id={`home.${type}.p`} /></p>
  </div>
);

const HexagonXs = ({ color, ...otherProps }) => (
  <div className="row">
    <div className={`col-xs-12 center-block hex ${color}`}>
      <HexagonInner { ...otherProps } />
    </div>
  </div>
);

const Content = () => (
  <div className="content">
    <div className="container hidden-xs hidden-sm">
      <div className="row">
        <div className="col-lg-3 col-md-3 hex partial-dark-grey">
          <div>
            <p><FormattedHTMLMessage id="home.front.p" /></p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-dashboard"></span></h4>
            <h3><FormattedMessage id="home.front.h" /></h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-stats"></span></h4>
            <h3><FormattedMessage id="home.datavisualization.h" /></h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex partial-dark-grey">
          <div>
            <p><FormattedHTMLMessage id="home.datavisualization.p" /></p>
          </div>
        </div>
      </div>
      <div className="center-row">
        <div className="row">
          <div className="col-lg-9 col-md-9 center-block">
            <div className="row">
              <div className="col-lg-4 col-md-4 hex partial-red">
                <div>
                  <p><FormattedHTMLMessage id="home.consulting.p1" /></p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 hex full-red">
                <div>
                  <h4><span className="glyphicon glyphicon-send"></span></h4>
                  <h3><FormattedMessage id="home.consulting.h" /></h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 hex partial-red">
                <div>
                  <p><FormattedHTMLMessage id="home.consulting.p2" /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-3 hex partial-dark-grey">
          <div>
            <p><FormattedMessage id="home.backend.h" /></p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-hdd"></span></h4>
            <h3><FormattedHTMLMessage id="home.backend.p" /></h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex full-dark-grey">
          <div>
            <h4><span className="glyphicon glyphicon-leaf"></span></h4>
            <h3><FormattedMessage id="home.nosql.h" /></h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 hex partial-dark-grey">
          <div>
            <p><FormattedHTMLMessage id="home.nosql.p" /></p>
          </div>
        </div>
      </div>
    </div>
    <div className="container visible-sm">
      <div className="row">
        <div className="col-sm-5 col-sm-offset-1 hex full-dark-grey">
          <HexagonInner type="frontend" icon="dashboard" />
        </div>
        <div className="col-sm-5 hex full-dark-grey">
          <HexagonInner type="datavisualization" icon="stats" />
        </div>
      </div>
      <div className="center-row">
        <div className="row">
          <div className="col-sm-5 center-block">
            <div className="row">
              <div className="col-sm-12 hex full-red">
                <HexagonInner type="consulting" icon="send" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5 col-sm-offset-1 hex full-dark-grey">
          <HexagonInner type="backend" icon="hdd" />
        </div>
        <div className="col-sm-5 hex full-dark-grey">
          <HexagonInner type="nosql" icon="leaf" />
        </div>
      </div>
    </div>
    <div className="container visible-xs">
      <HexagonXs type="frontend" icon="dashboard" color="full-dark-grey" isFat isThin />
      <HexagonXs type="datavisualization" icon="stats" color="full-dark-grey" />
      <HexagonXs type="consulting" icon="send" color="full-red" isFat />
      <HexagonXs type="backend" icon="hdd" color="full-dark-grey" isFat />
      <HexagonXs type="nosql" icon="leaf" color="full-dark-grey" />
    </div>
  </div>
);

export default Content;
