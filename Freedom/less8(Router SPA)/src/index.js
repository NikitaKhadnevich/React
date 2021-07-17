import React from 'react';
import ReactDOM from 'react-dom';
import { debugContextDevtool } from 'react-context-devtool';
import AccumCar from './Home/AccumCar';
import WithoutHook from './Components/WithoutHook/WithoutHook';
import WithHook from './Components/WithHook/WithHook';
import AppContext from './Home/AppContext'

const container = document.getElementById("root");
debugContextDevtool(container, {});

ReactDOM.render(
  <React.StrictMode>
    {/* <WithoutHook /> */}
    {/* <WithHook /> */}
    {/* <AccumCar /> */}
    <AppContext />
  </React.StrictMode>,
  container
);

