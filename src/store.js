import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';// import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';
import initialState from './reducers/initialState';
import createHistory from 'history/createBrowserHistory';
require('./styles/main.scss');


export const history = createHistory();
const middleware = routerMiddleware(history);
export const store = createStore(allReducers, applyMiddleware(middleware, thunk));