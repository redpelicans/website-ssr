import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Contact from '../contact';
import Splash from './splash';
import Javascript1 from './javascript1';
import Javascript2 from './javascript2';
import Datavisualization from './datavisualization';
import Frontend from './frontend';
import Backend from './backend';
import Nosql from './nosql';
import './technologies.less';

const Technologies = () => (
  <div className="technologies">
    <Header />
    <Splash />
    <Javascript1 />
    <Javascript2 />
    <Datavisualization />
    <Frontend />
    <Backend />
    <Nosql />
    <Contact />
    <Footer />
  </div>
);

export default Technologies;
