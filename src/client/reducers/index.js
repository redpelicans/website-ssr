import { combineReducers } from 'redux';
import { TOGGLE_MENU, LOCATION_CHANGE } from '../actions';

export const menu = (state = { isVisible: false }, action) => {
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

const rootReducer = combineReducers({ menu });
export default rootReducer;

