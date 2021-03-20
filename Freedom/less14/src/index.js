import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { debugContextDevtool } from 'react-context-devtool';
import App from './App';

const container = document.getElementById("root");
debugContextDevtool(container, {});

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  container
);

