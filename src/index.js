import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.js';
import ContainerApp from './containers/ContainerApp';
import allReducers from './reducers/index';
import { configureStore } from './store/configureStore.js';

require('./styles/main.scss');

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ContainerApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);