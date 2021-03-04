
import React from 'react'
import PreChild from './PreChild'

const Child = (props) => {

   return (
      <div className='Child'>
         <h4>Все о Ребенке</h4>
         <p> Возраст этого пропса {props.age} </p>
      <PreChild {...props} />
      </div>
   )
}

export default Child
 