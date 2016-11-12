import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Home } from './components';
import { App } from './containers';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="*" component={Home} />
  </Route>
);

export default routes;
