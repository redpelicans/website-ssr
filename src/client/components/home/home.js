import React from 'react';
import Splash from './splash';
import Consulting1 from './consulting1';
import Content from './content';
import Devops from './devops';
import Consulting2 from './consulting2';
import Hiring from './hiring';
import Stack from './stack';
import './home.less';

const Home = () => (
  <div className="home">
    <Splash />
    <Consulting1 />
    <Content />
    <Devops />
    <Consulting2 />
    <Hiring />
    <Stack />
  </div>
);

export default Home;
