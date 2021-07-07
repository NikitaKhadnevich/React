import React from 'react'
import  DataContext from '../Context/DataContext'
import { useContext, useState } from 'react';


function Text() {
   const { data: {footer}, count} = useContext(DataContext)

   console.log('count', count)
   return (
         <div>
            <h4>Some Text in Text </h4>
            <p>{footer}</p> 
            <p>{count}</p>
         </div>
   )
}

export default Text

