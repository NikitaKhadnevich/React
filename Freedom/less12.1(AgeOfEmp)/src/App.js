import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_getTodosRequested } from './ducks/todos/actions';
const todosSelector = (state) => state.todos.data;


const App = () => {

  const data = useSelector(todosSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTION_getTodosRequested('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'));
  }, []);  // 1 тут мы диспатчим наш урл в стор/вызываем экшн с аргументом

  useEffect(() => {
    console.log(data);
  }, [data]); // 7 а тут мы подтягиваем дату из стора
  
  return (
    <>
    </>
    // <div className='App'>
    //   {data.map((item, index) => {

    //     return (
    //       <div className='RenderPost' key={item.id}>
    //         <p>Цивилизации: {item.id}</p>
    //         <p>Юниты: {item.title}</p>
    //         <p>Структура и иерархия: {item.body}</p>
    //         <p>Технологии : {item.body}</p>
    //       </div>
    //       )
    //   })
    // }  
    // </div>
  )
};

export default App;
