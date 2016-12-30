import React from 'react';
import { FormattedMessage } from 'react-intl';

const Splash = () => (
  <div className="splash">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-xs-12">
          <h1 className="text-center">
            <span className="glyphicon glyphicon-send"></span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-xs-12">
          <h2 className="text-center">
            <FormattedMessage
              id="home.splash.catch"
              defaultMessage="The Full Stack Javascript Company"
            />
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-xs-12">
          <div className="separator-dark-red">
            <span></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-xs-12">
          <h3 className="text-center">{ 'HOME.SPLASH.MISSION' }</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-xs-12">
          <h3 className="text-center">{ 'HOME.SPLASH.WHO' }</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 hidden-xs">
          <h4 className="text-center">
            <a href="mailto:contact@redpelicans.com">{ 'CONTACTUS' }</a>
            <a href="#hiring" className="hiring" du-smooth-scroll duration="2000">{ 'HIRING' }</a>
            <a href="//blog.redpelicans.com">{ 'BLOG' }</a>
          </h4>
        </div>
        <div className="col-xs-12 visible-xs">
          <h4 className="text-center">
            <div><a href="mailto:contact@redpelicans.com">{ 'CONTACTUS' }</a></div>
            <br />
            <div><a href="#hiring" className="hiring" du-smooth-scroll duration="2000">{ 'HIRING' }</a></div>
            <br />
            <div><a href="//blog.redpelicans.com">{ 'BLOG' }</a></div>
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-xs-12">
          <div className="separator-grey">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Splash;
