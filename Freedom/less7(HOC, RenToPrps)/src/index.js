import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './HOCcomponents/App';
import TotalApp from './RendToPropComponents/TotalApp'

ReactDOM.render(
    <App />,  // Так будет работать на HOC
    // <TotalApp />, //  Так будет работаь на  Render To Props
  document.getElementById('root')
);