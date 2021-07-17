import { useDispatch, useSelector }  from 'react-redux'
import { catDataSelector, isErrorSelector, catReqDataSelector, isFetchingSelector } from '../ducs/selectors'
import { getCat } from '../ducs/data'

const api = 'https://breakingbadapi.com/api/characters'

const Data = () => {
   const dispatch = useDispatch();
   const catData = useSelector(catDataSelector)
   const catReq = useSelector(catReqDataSelector)
   const fetch = useSelector(isFetchingSelector)
   const errorData = useSelector(isErrorSelector)

   const handleClick = () => {
      dispatch(getCat(api))
   }

   return (
      <>
         <h5>Data Cat</h5>
         <button onClick={handleClick}>Add Cat</button>
         {
         (fetch && !catData) ? <p>{catReq}</p> :      
         catData && catData.map((item,i) => (
                  <ul>
                     <li>{item.name}</li>
                  </ul>
               )
            )
         }
         {(!fetch && errorData) ? <p>{errorData}</p> : null}
      </>
   );
}

export default Data