import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import { HomeView, HeaderView, Footer } from './components';

const App = ({ children }) => (
  <div className="AppView">
    <HeaderView />
    {children}
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.array,
};

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeView} />
      <Route path="home" component={HomeView} />
      <Route path="*" component={HomeView} />
    </Route>
  </Router>
), window.document.getElementById('root'));
