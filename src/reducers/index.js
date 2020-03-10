import { combineReducers } from 'redux'
import UserReducer from './reducer_users'

const rootReducer = combineReducers({
  // mapage du state reducer_users
  users: UserReducer
});

export default rootReducer;
