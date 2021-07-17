import React from 'react'
import { useState, useEffect } from 'react'
import useCheckInput from '../hooks/useCheckInput.hook'
import { useInput } from '../hooks/useInput.hook'

const Input = () => {
   const firstName = useInput('', {isEmpty: true, minLengthError: 3, isWarning: '', isMaxEmailLength: 20, isEmail: '', validEmail: ''})
   const secondName = useInput('', {isEmpty: true, minLengthError: 5, isWarning: '', isMaxEmailLength: 10, isPassword: '', validPass: ''})

   // const { ...rest } = firstName
   // console.log(rest.isBlur)

   // const { ...rest2 } = secondName
   // console.log(rest2.minLengthError)

   return (    
      <>
      <form>
         <p>Имя:</p><input 
         name='firstName' 
         type='text' 
         placeholder='Введите имя' 
         value={firstName.value}
         onBlur={e => firstName.onBlur(e)}
         onChange={e => firstName.onChange(e)}></input>

         { (firstName.isBlur && firstName.isEmpty) && 
         <div>{firstName.isWarning}</div> }

         { (firstName.isBlur && !firstName.isEmpty && firstName.minLengthError) && 
         <div>{firstName.minLengthError}</div> }     

         { (firstName.isBlur && !firstName.isEmpty && !firstName.minLengthError && !firstName.isMaxEmailLength && firstName.isEmail) && 
         <div>{firstName.isEmail}</div> }

         { (firstName.isBlur && firstName.isMaxEmailLength)&& 
         <div>{firstName.isMaxEmailLength}</div> }

      
         <p>Пароль</p><input 
         name='secondName' 
         type='password'  
         placeholder='Введите пароль' 
         value={secondName.value}
         onBlur={e => secondName.onBlur(e)}
         onChange={e => secondName.onChange(e)}></input>

         { (secondName.isBlur && secondName.isEmpty ) && 
         <div>{secondName.isWarning}</div> }

         { (secondName.isBlur && !secondName.isEmpty && secondName.minLengthError) && 
         <div>{secondName.minLengthError}</div> }         

         { (secondName.isBlur && !secondName.isEmpty && !secondName.minLengthError && !secondName.isMaxEmailLength && secondName.isPassword) &&
         <div>{secondName.isPassword}</div> }

         { (secondName.isBlur && secondName.isMaxEmailLength) && 
         <div>{secondName.isMaxEmailLength}</div> }

         <button disabled={(!firstName.validEmail || !secondName.validPass)}
         type='submit'
         onClick={() => {alert('Data sent successfully')}}>Registred</button>
      </form>   
      </>
   )
}

export default Input 


   // import { useAddButton } from '../hooks/useInput.hook'

   // const [arr, setArr] = useState([])

   // const ddd = useAddButton(firstName.value)
   // // console.log(`ddd`, ddd)
   // const addButtonHook = (items) => {
   //    setArr(items)
   // }

   {/* <button onClick={() => {addButtonHook(ddd)}}>add Button</button>
   {
   arr && arr.map((item,i) => {
      return (
         <p>{item}</p>
      )
   })
   } */}
