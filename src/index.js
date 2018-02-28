import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.js';
import allReducers from './reducers/index';
import createHistory from 'history/createBrowserHistory';
import { history, configureStore } from './store/configureStore.js';

require('./styles/main.scss');

const store = configureStore();

/*
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
*/


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);