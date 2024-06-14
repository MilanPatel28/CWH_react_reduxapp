// this index.js file is used to import all the reducers and combine them into one reducer

import { combineReducers } from 'redux';
import amountReducer from './amountReducer';

// combineReducers - used to combine all the reducers into one reducer
const reducers = combineReducers({
    amount: amountReducer
});

export default reducers;