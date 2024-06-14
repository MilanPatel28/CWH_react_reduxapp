// this store.js file is our reduxStore, which is used to create the store for our application


// createStore is deprecated, so we are using configureStore
import { createStore, applyMiddleware } from 'redux';
// import { configureStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const store = createStore(reducers, {}, applyMiddleware(thunk)); // we are passing the reducers, initial state, and the middleware to the createStore function