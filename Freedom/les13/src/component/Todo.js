import { useDispatch, useSelector }  from 'react-redux'
import { useState } from 'react'
import { ADD_TODO } from '../ducs/todo'


const Todo = () => {

   const [value, setValue] = useState()
   const dispatch = useDispatch();

   const handleClick2 = (e) => {
      dispatch(ADD_TODO(value))
      setValue('');
   }
   const handleChange = (e) => {
      setValue(e.target.value)
   }

   return (
      <>
      <h5>Todo</h5>
         <input value={value} onChange={handleChange} />
         <button onClick={handleClick2}>Add todo</button>
         <div>{value}</div>
      </>
   );
}
export default Todo