import { combineReducers } from 'redux';
import userReducer from '../user/reducer';
import { articleReducer } from '../article/reducer';
import { connectRouter } from 'connected-react-router';

export const createRootReducer = (history) => combineReducers({
  user: userReducer,
  articles: articleReducer,
  router: connectRouter(history)
});

export default createRootReducer;