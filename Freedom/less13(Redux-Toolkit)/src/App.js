import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './component/Counter'
import Todo from './component/Todo'
import Data from './component/Data'


const App = () => {
  return (
  <>
    <p>Its</p>
    <Counter />
    <hr></hr>
    <Todo />
    <hr></hr>
    <Data />
  </>
  )
}

export default App;
