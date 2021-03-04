
import React from 'react'
import PreChild from './PreChild'

const Child = (props) => {
   const { children } = props
   return (
      <div className='Child'>
         <h3>Все о Ребенке</h3>
         <p> Возраст этого пропса {children.age} </p>
      <PreChild>
         {children}
      </PreChild>
      </div>
   )
}

export default Child
 