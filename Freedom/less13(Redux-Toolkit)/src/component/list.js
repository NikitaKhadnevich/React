import { useSelector } from 'react-redux'
import { counterSelector, dataSelector } from '../ducs/selectors'
   
   const List = () => {
   
   const count = useSelector(counterSelector)
   const data = useSelector(dataSelector)
   // const { count } = props
   console.log('CountinList', count)


   return (
      <>
         <h5>List</h5>
         { count.count.map((item, i) => {
         return (
               <ul>{item}</ul>
            )
         })}
         { data.data && data.data.map((item, i) => {
         return (
               <p>{item}</p>
            )
         })}
      </>
   );
}
export default List


