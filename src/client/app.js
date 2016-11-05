import React from 'react';
import { render } from 'react-dom';
import { HeaderView } from './modules';

const App = () => (
  <div className="AppView">
    <HeaderView />
  </div>
);


render(<App />, document.getElementById('root'));
