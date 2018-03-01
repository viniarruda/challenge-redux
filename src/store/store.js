import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import product from './reducers/productReducer';

export default createStore(
    combineReducers({
        product,
    }),
    {},
    applyMiddleware(thunk, promise())
)