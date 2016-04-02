import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';

let ping = store => next => action => {
  console.log('ping middleware for action: ' + JSON.stringify(action));
  return next(action);
};

export default function configureStore(initialState) {
  const store =  createStore(rootReducer, initialState, applyMiddleware(ping));
  
  return store;
}