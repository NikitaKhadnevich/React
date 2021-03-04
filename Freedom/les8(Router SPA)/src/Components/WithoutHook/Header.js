import React from 'react'
import SubHeader from './SubHeader'
import { useContext } from 'react';
import  DataContext from '../Context/DataContext'


function Header() {
   return (
      <DataContext.Consumer>
         {( {title} ) => (
            <div>
               <h3>Some text in Header</h3>
               <p>{title}</p>
               <hr></hr>
               <SubHeader />
            </div>
            )}
      </DataContext.Consumer>
   )
}

export default Header

