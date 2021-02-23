import React from 'react'
import './App.css';
import Header from './Components/Header'
import DataContextProvider from './Components/Context/DataContextProvider'
import DataContext from './Components/Context/DataContext';

function App() {
  return (
    <DataContextProvider>
      <div className="App">
        <Header  />
      </div>
    </DataContextProvider>
  );
}

export default App;
