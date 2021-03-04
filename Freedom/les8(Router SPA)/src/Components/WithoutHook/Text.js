import React from 'react'
import { useState } from 'react'
import  DataContext from '../Context/DataContext'


function Text() {
   return (
      <DataContext.Consumer>
         {( {footer} ) => (
         <div>
            <h4>Some Text in Text </h4>
            <p>{footer}</p>
            
         </div>
         )}
      </DataContext.Consumer>
   )
}

export default Text

