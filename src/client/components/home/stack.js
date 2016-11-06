import React from 'react';
import dockerThumb from '../../assets/images/docker-thumb.png';
import mongodbThumb from '../../assets/images/mongodb-thumb.png';
import nodejsThumb from '../../assets/images/nodejs-thumb.png';
import angularjsThumb from '../../assets/images/angularjs-thumb.png';
import reactThumb from '../../assets/images/react-thumb.png';
import aureliaThumb from '../../assets/images/aurelia-thumb.png';

const Stack = () => (
  <div id="stack" className="light-grey slide">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-xs-12">
          <h2 className="text-center">{ "HOME.STACK.H" }</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div className="wrapper">
            <a href="https://www.docker.com/">
              <img src={dockerThumb} />
              <span>Docker</span>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div className="wrapper">
            <a href="https://www.mongodb.org/">
              <img src={mongodbThumb} />
              <span>MongoDB</span>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div className="wrapper">
            <a href="https://nodejs.org/">
              <img src={nodejsThumb} />
              <span>Node.js</span>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div className="wrapper">
            <a href="https://angularjs.org/">
              <img src={angularjsThumb} />
              <span>AngularJS</span>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div className="wrapper">
            <a href="http://facebook.github.io/react/">
              <img src={reactThumb} />
              <span>React</span>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
          <div className="wrapper">
            <a href="http://aurelia.io/">
              <img src={aureliaThumb} />
              <span>Aurelia</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Stack;
