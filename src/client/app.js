import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './components';
import './app.less';

const App = ({ children }) => (
  <div className="app">
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object,
};

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="*" component={Home} />
    </Route>
  </Router>
), window.document.getElementById('root'));
