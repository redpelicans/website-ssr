import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { TOGGLE_MENU, LOCATION_CHANGE } from '../actions';

export const menu = (state = {}, action) => {
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

const rootReducer = combineReducers({
  routing: routerReducer,
  menu,
});

export default rootReducer;

