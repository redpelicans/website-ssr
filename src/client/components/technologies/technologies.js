import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Splash from './splash';
import Datavisualization from './datavisualization';
import Frontend from './frontend';
import Backend from './backend';
import Nosql from './nosql';
import Contact from './contact';
import './technologies.less';

const Technologies = () => (
  <div className="technologies">
    <Header />
    <Splash />
{/*
    <Javascript1 />
    <Javascript2 />
*/}
    <Datavisualization />
    <Frontend />
    <Backend />
    <Nosql />
    <Contact />
    {/*<Partners />*/}
    <Footer />
  </div>
);

export default Technologies;
