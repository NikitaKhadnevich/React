import React from 'react'
import SubHeader from './SubHeader'
import { useContext, useState} from 'react';
import  DataContext from '../Context/DataContext'

function Header() {
   const { data: {title} }= useContext(DataContext)
   console.log('title', title)

   return (
         <div>
            <h3>Some text in Header have a </h3>
            <p>{title}</p>
            <hr></hr>
            <SubHeader />
         </div>
   )
}

export default Header

