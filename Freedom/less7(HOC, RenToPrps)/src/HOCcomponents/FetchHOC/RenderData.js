import React from 'react'
import { useState, useEffect } from 'react'
import HocData from './HocData'

const RenderData = (props) => {
   const { postsData } = props
   const [ postArr, setPostarr] = useState([])

   useEffect(() => {
         function setData() {
            setPostarr(postsData)
         }
      setData();
      }
   );

   return (
      <>
         {postArr.map((item, index) => {
            return (
               <div>
                  <ul>
                     <li>
                        {item.title}
                     </li>
                  </ul>
               </div>
         )})}
      </>
   );
};

export default HocData(RenderData)