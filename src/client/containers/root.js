import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

const Root = ({ store, routes, history }) => (
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>
);

Root.propTypes = {
  store:        PropTypes.object.isRequired,
  routes:       PropTypes.object.isRequired,
  history:      PropTypes.object,
}

export default Root;
