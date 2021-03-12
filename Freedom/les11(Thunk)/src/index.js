import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { debugContextDevtool } from 'react-context-devtool';

import App from './App';

import store from '../src/_HOME/store';
// import store from '../src/LESS/store';

const container = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);

debugContextDevtool(container, {});
