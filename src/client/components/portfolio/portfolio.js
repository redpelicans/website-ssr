import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Contact from '../contact';
import Splash from './splash';
import './portfolio.less';
import { map, uniqueId } from 'lodash';

const clients = [
  {
    name: 'OECD',
    description: 'OECD',
    link: 'http://www.oecd.org/',
    tags: ['React', 'ES6', 'D3JS']
  },
  {
    name: 'Rothschild',
    description: 'Rothschild',
    link: 'https://www.rothschildgestion.com',
    tags: ['NodeJS', 'MongoDB', 'AngularJS', 'D3JS']
  },
  {
    name: 'Factset',
    description: 'Factset',
    link: 'http://www.factset.com/',
    tags: ['NodeJS', 'MongoDB', 'AngularJS', 'D3JS']
  },
  {
    name: 'Platform5',
    description: 'Platform5',
    link: 'http://www.platform5.ch',
    tags: ['NodeJS', 'MongoDB', 'Google Map API']
  },
  {
    name: 'Lexsi',
    description: 'Lexsi',
    link: 'https://www.lexsi.com',
    tags: ['AngularJS', 'ES6']
  }
];

const Portfolio = () => (
  <div className="portfolio">
    <Header />
    <Splash />

    <div className="content slide">
      <div className="container">
        <div className="strip top">
          <div className="row">
            {
              map(clients, (client) => (
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" key={ uniqueId() }>
                  <a href={ client.link }>
                    <div className={`image ${client.name.toLowerCase()}`} />
                  </a>
                  <p>{ client.description }</p>
                  <p>
                    {
                      map(client.tags, (tag) => (
                        <span key={ uniqueId() } className="label label-rp">{ tag }</span>
                      ))
                    }
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>

    <Contact />
    <Footer />
  </div>
);

export default Portfolio;
