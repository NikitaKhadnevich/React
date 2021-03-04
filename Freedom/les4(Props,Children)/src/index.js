import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parent from './PropsSendData/Parent'
import ChildrenParent from './ChildrenSendData/ChildrenParent'


ReactDOM.render(
  <React.StrictMode>
    <Parent />
    <hr></hr>
    <ChildrenParent />
  </React.StrictMode>,
  document.getElementById('root')
);


