import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistory } from 'react-router-redux'
import DevTools from '../containers/dev-tools'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const configureStore = (initialState) => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
  )
);

export default configureStore;
