import React from 'react'
import Header from './Header'
import DataContextProvider from '../Context/DataContextProvider'
import DataContext from '../Context/DataContext';

const data = {
  title: 'for Header from CONTEXT DATA',
  body: 'for SubHeader from CONTEXT DATA',
  footer: 'for Text from CONTEXT DATA'
}

const WithoutHook = () => {
  return (
    <DataContext.Provider value={data}>
      <Header  />
    </DataContext.Provider>
  );
}

export default WithoutHook;
