import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { debugContextDevtool } from 'react-context-devtool';
import './index.css'

import AppCONTEXT from './AppCONTEXT';


const container = document.getElementById('root');

ReactDOM.render(
  <AppCONTEXT />, container
);

debugContextDevtool(container, {});

  // <Provider store={store}>
  //   <App />
  // </Provider>,
  // container // Для REDUX