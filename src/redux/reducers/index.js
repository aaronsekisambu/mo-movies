import { combineReducers } from 'redux';
import users from './users'
import movies from './movies'

const rootReducer = combineReducers({
  users,
  movies
});

export default rootReducer;
