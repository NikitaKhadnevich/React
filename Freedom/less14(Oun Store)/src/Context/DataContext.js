import { createContext } from 'react';

const DataContext = createContext()

const Provider = ({ children, store})  => {
   return (
      <DataContext.Provider value={store}>
         {children}
      </DataContext.Provider>)
}
const ctx = {
   Provider,
   DataContext,
}

export default ctx