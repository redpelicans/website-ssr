import React, { PropTypes } from 'react';
import './app.less';

const App = ({ children }) => (
  <div className="app">
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object,
};

export default App;
