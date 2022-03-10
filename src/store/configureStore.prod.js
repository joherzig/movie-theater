import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

const configureStore = preloadedState =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, promiseMiddleware()));

export default configureStore;
