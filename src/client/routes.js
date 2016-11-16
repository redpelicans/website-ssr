import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Home } from './components';
import { App } from './containers';

const routes = (
  <Route name='home' path="/" component={App}>
    <IndexRoute  component={Home} />
    <Route name='home' path='home' component={Home} />
    <Route name='technologies' path='technologies' component={Home} />
    <Route name='portfolio' path='portfolio' component={Home} />
    <Route name='home' path="*" component={Home} />
  </Route>
);

export default routes;
