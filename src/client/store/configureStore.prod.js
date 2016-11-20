import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers';

const configureStore = (initialState) => createStore(
  rootReducer,
  initialState
);
export default configureStore;
