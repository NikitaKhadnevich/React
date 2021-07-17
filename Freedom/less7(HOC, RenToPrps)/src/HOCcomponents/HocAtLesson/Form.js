import React from 'react'
import { useState } from 'react'
import HOCForm from './HOCForm'

const Form = ( {data} ) => {
   const parseData = (data) => {
      console.log(data)
      return "Data recived";
   }
 
   const [name, setName] = useState(data.name);
   const [email, setEmail] = useState(data.email);

   const handleName = (e) => {
      setName(e.target.value)
      console.log(name)
   }
   const handleEmail = (e) => {
      setEmail(e.target.value)
      console.log(email)
   }

   return (  
      <>
         <div>
               {data ? parseData(data) : 'No data for render'}
            <form>
               <input type="text" placeholder="Enter Name" name="name" onChange={handleName}/>
               <input type="text" placeholder="Enter Email" name="email" onChange={handleEmail}/>
            </form>
         </div>
      </>
   )
}

export default HOCForm(Form)


