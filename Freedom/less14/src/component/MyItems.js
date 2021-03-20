import React from 'react'
import  DataContext from '../Context/DataContext'
import { useContext, useState } from 'react';


const MyItems = () => {

   const handleName = (e) => {
      const name = e.target.value
      return name
    };

   const handleclick = () => {
      console.log(`dadasda`)
   }



   return (
      <>
         <div className='MyInput'>
         <input placeholder="Enter Name"  value={names} onChange={handleName} />
         <button data-num='1' onClick={handleclick}>Edit Todo</button>
         </div>
      </>
   );
}

export default MyItems;
