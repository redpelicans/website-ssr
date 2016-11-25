import React from 'react';
import { render } from 'react-dom';
import routes from '../routes';
import configureStore from './store/configureStore';
import { browserHistory as history, match, Router } from 'react-router';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';

const initialState = window.__PRELOADED_STATE__;
const store = configureStore(initialState);
const mountNode = window.document.getElementById('__APP__');
match({ history, routes }, (error, redirectLocation, renderProps) => {
  const root = <Provider store={store}><Router {...renderProps}/></Provider>;
  render(root, mountNode);
})
