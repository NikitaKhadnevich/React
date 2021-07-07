import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {debugContextDevtool} from  'react-context-devtool'

import store from './store/store'
import ctx from './Context/DataContext'

const container = document.getElementById("root");
ReactDOM.render(
  <ctx.Provider store={store}>
    <App />
  </ctx.Provider>,
  container
);

debugContextDevtool(container)
