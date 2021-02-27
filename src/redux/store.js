import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import productReducer from './reducers/product';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, logger];

export default createStore(
  productReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
