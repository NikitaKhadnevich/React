import { useState, useContext } from 'react'

import { ACTION_ADD_TODO,  ACTION_ADD_HEADER }  from '../ducs/todo'
import todoContex from '../context/todoContext'

const Items = () => {
   const [value, onChange] = useState('');
   const { dispatch, dataReducer } = useContext(todoContex);// 5. Забираем все, что передали 

   const handleChange = (e) => {
      onChange(e.target.value)
   }

   const handleClick = () => {
      dispatch(ACTION_ADD_TODO(value)) 
      dispatch(ACTION_ADD_HEADER(value))
      // Спокойно юзаем метод хука useReducer на другом компоненте
      onChange('');
   }

   return (   
      <>
         <h5>Todo useReducer</h5>
            <input value={value} onChange={handleChange} />
            <button onClick={handleClick}>Add todo</button>
            <p>{dataReducer.dataHeader}</p>
      </>// А тут вообще при желании можем выводить нашу дату 
   );
}
export default Items