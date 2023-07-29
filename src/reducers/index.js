import {combineReducers} from 'redux';
// Reducers
import mainReducer from './mainReducer';

const rootReducer = combineReducers({
  main: mainReducer,
});

export default (state, action) => {
  if (action.type === 'RESET_APP_STATE') {
    state = undefined;
  }
  return rootReducer(state, action);
};
