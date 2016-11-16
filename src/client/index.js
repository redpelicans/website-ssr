import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import configureStore from './store/configureStore';
import { Root } from './containers';
import { browserHistory as history} from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';

const initialState = window.__PRELOADED_STATE__;
const store = configureStore(initialState);

const root = (
  <Root
    store={store}
    routes={routes}
    history={history}
  />
);

render(root, window.document.getElementById('__APP__'));
