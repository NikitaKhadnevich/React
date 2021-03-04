import React from 'react'
import Text from './Text'
import { useContext, useState } from 'react';
import  DataContext from '../Context/DataContext'

function SubHeader() {
   const { data: {body}, setCount, count } = useContext(DataContext)

   const handleCount = () => {
      setCount(count+1)
   }


   return (
         <div>
            <h4>Some Text in Subheader </h4>
            <p>{body}</p>
            <button onClick={handleCount}>Counter</button>
            <hr></hr>
            <Text />
         </div>
   );
};

export default SubHeader

