
import React from 'react'
import PreChild from './PreChild'

const Child = (props) => {
   const { children } = props // Забираем пропсы и деструктурируем
   return (
      <div className='Child'>
         <h3>Все о Ребенке</h3>
         <p> Возраст этого пропса {children.age} </p>
      <PreChild>
         {children}
      </PreChild> 
      </div> // Принимаем чайлд
   )
}

export default Child
 