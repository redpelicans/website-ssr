import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Splash from './splash';
import Consulting1 from './consulting1';
import Content from './content';
import Devops from './devops';
import Consulting2 from './consulting2';
import Hiring from './hiring';
import Stack from './stack';
import './home.less';

const Home = ({location}) => (
  <div className="home">
    <Header location={location} />
    <Splash />
    <Consulting1 />
    <Content />
    <Devops />
    <Consulting2 />
    <Hiring />
    <Stack />
    <Footer />
  </div>
);

export default Home;
