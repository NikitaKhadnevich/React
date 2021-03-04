import React from 'react';
import ReactDOM from 'react-dom';
import ShowForm from '../showForm/ShowForm'
import { useState } from 'react'


const Rthree = () => {
   const [name, setName] = useState(null)
   const [email, setEmail] = useState(null)
   const [pass, setPass] = useState(null)

   const PropsToState = (name, email, pass) => {
      setName(name)
      setEmail(email)
      setPass(pass)
   }

   return (
      <>
        <div className='myFormThree'>
            <form>
            <ShowForm render={( {name, email, pass} ) => {
               console.log(name, email, pass);
               PropsToState(name,email,pass)
                  return(
                     <>
                     <h4>Delete acc</h4>
                     <input id='cheker'type="checkbox" name="Оставьте Ваш отзыв"/>
                     <textarea name="Оставьте Ваш отзыв"></textarea>
                     
                     <button>Send</button>
                     </>
                  )   
               }}
            />
            </form>
         </div>
         {/* {props.render( {name, email, pass, secondName, birth, telNumb} )} */}
      </>
   )
}

export default Rthree 