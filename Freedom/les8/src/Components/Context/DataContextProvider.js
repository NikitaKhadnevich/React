import React from 'react'
import { useState } from 'react'
import DataContext from './DataContext'


const data = {
   one: 'Heder Data',
   two: 'Subheder Data',
   three: 'Text Data'
}

const DataContextProvider = ( {children} ) => {
   const [count, setCount] = useState(1)

   return (
      <DataContext.Provider>
         value={
            {
            data,
            count,
            setCount
            }
         }
         {children}
      </DataContext.Provider>
   )
}

export default DataContextProvider

