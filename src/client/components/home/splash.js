import React from 'react';
import { FormattedMessage } from 'react-intl';

const Wrapper = ({ children }) => (
  <div className="row">
    <div className="col-lg-12 col-xs-12">
      {children}
    </div>
  </div>
);

const Separator = ({ type }) => (
  <Wrapper>
    <div className={type}>
      <span></span>
    </div>
  </Wrapper>
);

const LinkContactUs = () => (
  <a href="mailto:contact@redpelicans.com">
    <FormattedMessage id="contactus" />
  </a>
);

const LinkHiring = () => (
  <a href="#hiring" className="hiring" du-smooth-scroll duration="2000">
    <FormattedMessage id="hiring" />
  </a>
);

const LinkBlog = () => (
  <a href="//blog.redpelicans.com">
    <FormattedMessage id="blog" />
  </a>
);

const Splash = () => (
  <div className="splash">
    <div className="container">
      <Wrapper>
        <h1 className="text-center">
          <span className="glyphicon glyphicon-send"></span>
        </h1>
      </Wrapper>
      <Wrapper>
        <h2 className="text-center">
          <FormattedMessage id="home.splash.catch" />
        </h2>
      </Wrapper>
      <Separator type="separator-dark-red" />
      <Wrapper>
        <h3 className="text-center">
          <FormattedMessage id="home.splash.mission" />
        </h3>
      </Wrapper>
      <Wrapper>
        <h3 className="text-center">
          <FormattedMessage id="home.splash.who" />
        </h3>
      </Wrapper>
      <div className="row">
        <div className="col-lg-12 hidden-xs">
          <h4 className="text-center">
            <LinkContactUs />
            <LinkHiring />
            <LinkBlog />
          </h4>
        </div>
        <div className="col-xs-12 visible-xs">
          <h4 className="text-center">
            <div><LinkContactUs /></div><br />
            <div><LinkHiring /></div><br />
            <div><LinkBlog /></div>
          </h4>
        </div>
      </div>
      <Separator type="separator-grey" />
    </div>
  </div>
);

export default Splash;

