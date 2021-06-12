import { useDispatch, useSelector }  from 'react-redux'
import { useState } from 'react'
import { ADD_TODO,  TEST_TODO} from '../ducs/todo'
import  { todoSelector, testSelector } from '../ducs/selectors'

const Todo = () => {
   const [value, setValue] = useState()
   const dispatch = useDispatch();
   const myTodo = useSelector(todoSelector)
   const myTest = useSelector(testSelector)

   const handleClick2 = (e) => {
      dispatch(ADD_TODO(value))
      setValue('');
   }

   const handleChange = (e) => {
      if (e.target.value.length < 10) {setValue(e.target.value)}
      else { alert('Слишком длинное значение')}
   }

   const handleClick3 = () => {
      dispatch(TEST_TODO(value + 'Angron'))
      setValue('');
   }

   return (
      <>
      <h5>Todo</h5>
         <input value={value} onChange={handleChange} />
         <button onClick={handleClick2}>Add todo</button>
         <button onClick={handleClick3}>Show Test</button>

         {myTodo && myTodo.map((item, i) => {
            return (
               <p>{item}</p>
            )
         })}
         {myTest && Object.values(myTest).map((item,i) => {
            return (
               <p>{item}</p>
            )
         })}
      </>
   );
}
export default Todo