import React from 'react'
import { useState } from 'react'
import DataContext from './DataContext'

const data = {
   title: 'for Header from CONTEXT DATA',
   body: 'for SubHeader from CONTEXT DATA',
   footer: 'for Text from CONTEXT DATA'
}

const DataContextProvider = ( {children} ) => {
   const [count, setCount] = useState(1); 
   return   <DataContext.Provider value={
               {data,
               count,
               setCount,}
               }>
               {children}
            </DataContext.Provider>
   }

export default DataContextProvider

