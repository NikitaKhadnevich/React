import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataContextProvider from './Context/DataContextProvider'
import MyItems from './component/MyItems'


const App = () => {

  return (
  <>
    <DataContextProvider>
        <MyItems />
        <p>ssdsdsf</p>
        <hr></hr>
    </DataContextProvider>
  </>
  )
}

export default App;
