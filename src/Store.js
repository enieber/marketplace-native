import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'

import product from './reducers/product';
import nav from './reducers/navigation';

const rootReducer = combineReducers({
  product,
  nav, 
});

export default(initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(ReduxThunk, logger))
}
