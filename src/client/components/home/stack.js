import React from 'react';
import R from 'ramda';
import { FormattedMessage } from 'react-intl';
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
          <h2 className="text-center">
            <FormattedMessage id="home.stack.h" />
          </h2>
        </div>
      </div>
      <div className="row">
        {
          R.map(
            (s) => (
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12" key={`stack#${s.name}`}>
                <div className="wrapper">
                  <a href={s.link}>
                    <div className={`image ${s.image}`} />
                    <span>{s.name}</span>
                  </a>
                </div>
              </div>
            ),
            [
              { name: "Docker", image: "dockerThumb", link: "https://www.docker.com/" },
              { name: "MongoDB", image: "mongodbThumb", link: "https://www.mongodb.org/" },
              { name: "Node.js", image: "nodejsThumb", link: "https://nodejs.org/" },
              { name: "AngularJS", image: "angularjsThumb", link: "https://angularjs.org/" },
              { name: "React", image: "reactThumb", link: "http://facebook.github.io/react/" },
              { name: "Aurelia", image: "aureliaThumb", link: "http://aurelia.io/" },
            ]
          )
        }
      </div>
    </div>
  </div>
);

export default Stack;
