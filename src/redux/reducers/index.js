import { combineReducers } from 'redux';
import adminReducer from './admin';
import appReducer from './app';
import contentReducer from './content';
import userReducer from './user';

const rootReducer = combineReducers({
  admin: adminReducer,
  app: appReducer,
  content: contentReducer,
  user: userReducer,
});

export default rootReducer;
