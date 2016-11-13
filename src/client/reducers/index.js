import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { TOGGLE_MENU, LOCATION_CHANGE } from '../actions';

const menu = (state = {}, action) => {
  switch(action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    default:
      return state;
  };
};

const getCurrentPage = ({ payload: { pathname }}) => {
  return ['home', 'technologies', 'portfolio'].indexOf(pathname) != -1 ? pathname : 'home';
};

const currentPage = (state = {}, action) => {
  switch(action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        name: getCurrentPage(action),
      };
    default:
      return state;
  };
};
const rootReducer = combineReducers({
  routing: routerReducer,
  menu,
  currentPage,
});

export default rootReducer;

