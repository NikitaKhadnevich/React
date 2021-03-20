import React from 'react'
import { useState } from 'react'
import DataContext from './DataContext'
import MyItems from '../component/MyItems'

const DataContextProvider = ( {children} ) => {
   const data = {
      inputdata: ''
   }
      
   return   <DataContext.Provider value={{data}}>
                 {children}
            </DataContext.Provider>
   }

export default DataContextProvider

