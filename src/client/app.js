import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { HomeView, HeaderView, Footer } from './components';
import 'bootstrap/dist/css/bootstrap.css';

const App = ({ children }) => (
  <div className="AppView">
    <HeaderView />
    { children }
    <Footer />
  </div>
);

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ HomeView } />
      <Route path="home" component={ HomeView }/>
      <Route path="*" component={ HomeView }/>
    </Route>
  </Router>
), document.getElementById('root'));
