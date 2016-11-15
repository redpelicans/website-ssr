import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import configureStore from './store/configureStore';
import { Root } from './containers';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'bootstrap/dist/css/bootstrap.css';

const initialState = window.__PRELOADED_STATE__;
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);
history.listen((location) => console.log(location));

const root = (
  <Root
    store={store}
    routes={routes}
    history={history}
  />
);

render(root, window.document.getElementById('__APP__'));
