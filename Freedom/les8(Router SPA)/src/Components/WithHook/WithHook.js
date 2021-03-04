import React from 'react'
import Header from './Header'
import DataContextProvider from '../Context/DataContextProvider'

const WithHook = () => {
  return (
    <>
    <DataContextProvider>
        <Header />
    </DataContextProvider>
    </>
  );
}

export default WithHook;
