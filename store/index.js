import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import users from './users';
import book from './book';

const reducer = combineReducers({ book, users })
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({ collapsed: false })))

const store = createStore(reducer, middleware);

export default store;
export * from './book';
export * from './users';


