import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';// import { BrowserRouter } from 'react-router-dom';
import App from './components/App.js';
import allReducers from './reducers/index';
import createHistory from 'history/createBrowserHistory';
require('./styles/main.scss');


const history = createHistory();
const middleware = routerMiddleware(history)
const store = createStore(allReducers, applyMiddleware(middleware));


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);