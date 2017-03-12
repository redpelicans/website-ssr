import React from 'react';
import R from 'ramda';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Header from '../header';
import Footer from '../footer';
import Contact from '../contact';
import Splash from './splash';
import './portfolio.less';

const Client = ({ name, link, tags }) => (
  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <a href={ link }><div className={`image ${name.toLowerCase()}`} /></a>
    <p><FormattedHTMLMessage id={`portfolio.${name.toLowerCase()}.p`} /></p>
    <p>
      {
        R.map(
          (tag) => <span key={`tag#${name.toLowerCase()}#${tag}`} className="label label-rp">{ tag }</span>,
          tags
        )
      }
    </p>
  </div>
);

const Portfolio = () => (
  <div className="portfolio">
    <Header />
    <Splash />

    <div className="content slide">
      <div className="container">
        <div className="strip top">
          <div className="row">
            <Client
              name="venteprivee"
              link="http://www.vente-privee.com"
              tags={['React', 'Redux', 'ES6']}
            />
            <Client
              name="jeuxvideocom"
              link="http://www.jeuxvideo.com/"
              tags={['NodeJS', 'Redis', 'RabbitMQ', 'React', 'Server-side Rendering']}
            />
          </div>
          <div className="row">
            <Client
              name="OECD"
              link="http://www.oecd.org/"
              tags={['React', 'Redux', 'ES6', 'D3JS']}
            />
            <Client
              name="CNES"
              link="https://cnes.fr/"
              tags={['Electron', 'React', 'Redux']}
            />
          </div>
        </div>
        <div className="strip">
          <div className="row">
            <Client
              name="Rothschild"
              link="https://www.rothschildgestion.com"
              tags={['NodeJS', 'MongoDB', 'AngularJS', 'D3JS']}
            />
            <Client
              name="Factset"
              link="http://www.factset.com/"
              tags={['NodeJS', 'MongoDB', 'AngularJS', 'D3JS']}
            />
          </div>
        </div>
        <div className="strip top">
          <div className="row">
            <Client
              name="Lexsi"
              link="https://www.lexsi.com"
              tags={['AngularJS', 'ES6']}
            />
            <Client
              name="Platform5"
              link="http://www.platform5.ch"
              tags={['NodeJS', 'MongoDB', 'Google Map API']}
            />
          </div>
        </div>
      </div>
    </div>

    <Contact />
    <Footer />
  </div>
);

export default Portfolio;
