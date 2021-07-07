import React from 'react';
import { connect } from 'react-redux';
import Header from './components/HeaderCONTEXT'
import SubHeader from './components/SubHeaderCONTEXT'
import Text from './components/TextCONTEXT/index'
import GlobalStyles from './components/GlobalStyles'

import DataContextProvider from './context/DataContextProvider'
// У любого контекста есть:
// Provider - с помощью этого мы передаем данные
// Consumer - с помощью этого получаем данные

const  AppCONTEXT = () =>  {
    return ( // Оборачиваем в провайдер 
      <div className='AppContext'>
        <GlobalStyles />
        <DataContextProvider> 
          <Header />
        </DataContextProvider>
      </div>
    );
}

export default AppCONTEXT
