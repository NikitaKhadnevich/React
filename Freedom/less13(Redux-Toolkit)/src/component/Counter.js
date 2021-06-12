import { useDispatch, useSelector }  from 'react-redux'
import { ACTION_INCREMENT, ACTION_DECREMENT } from '../ducs/counter'
import { dataSelector, counterSelector } from '../ducs/selectors'
import List from './list'



const Counter = (props) => {
   const count = useSelector(counterSelector)
   const data = useSelector(dataSelector)
   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(ACTION_INCREMENT(10))
   }
   const handleClick2 = () => {
      dispatch(ACTION_DECREMENT(10))
   }

   return (
      <>
         <h5>Counters</h5>
         <button onClick={handleClick}>+</button>
         <button onClick={handleClick2}>-</button>
         <List count={count}/>
      </>
   );
}
export default Counter