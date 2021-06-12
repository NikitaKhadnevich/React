import React from 'react';
import ReactDOM from 'react-dom';
import RoneHOC from '../RenderHOC/RoneHOC'
import { useState } from 'react'

const ShowForm = ( {data} ) => {
   const parseData = (data) => {
      return 'data rend'
   } // 1. Тут по сути и лежит наша дата

   const [name, setName] = useState(data.name)
   const [email, setEmail] = useState(data.email)
   const [pass, setPass] = useState(data.pass)

   const handleName = (e) => {
      setName(e.target.value)
      console.log('name', name)
   }

   const handleEmail = (e) => {
      setEmail(e.target.value)
      console.log('email', email)
   }

   const handlePass = (e) => {
      setPass(e.target.value)
      console.log('pass', pass)
   }

   return (
      <>
         {data ? parseData(data) : 'No data'}
         <input type="text" placeholder="Enter Name" name="name" onChange={handleName}/>
         <input type="text" placeholder="Enter Email" name="email" onChange={handleEmail}/>
         <input type="passwod" placeholder="Enter Password" name="pass" onChange={handlePass}/>
      </>
   )
}

export default RoneHOC(ShowForm) // Похоже на рендер ту пропс