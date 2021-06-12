import React from 'react'
import Child from './Child'
import PreChild from './PreChild'

const ChildrenParent = () => {
   const parentdata = {
      name: 'Max',
      age: 25,
      post: 'All my Kind'
   }

   return (
      <div className='ParentBlock'>
         <h3>Блок рисует Имя {parentdata.name}</h3>
         <Child>
            {parentdata}
         </Child> 
      </div> // Передаем чайлд
   )
}

export default ChildrenParent
