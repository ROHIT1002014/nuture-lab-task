import { combineReducers } from 'redux';

import rootReducer from './reducers/index';

const mainReducer = combineReducers({
  rootReducer,
});

export default mainReducer;
