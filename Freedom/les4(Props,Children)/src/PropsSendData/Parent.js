import React from 'react'
import Child from './Child'

function Parent() {
   const parentdata = {
      name: 'Max',
      age: 25,
      post: 'All my Kind'
   }

   return (
      <div className='ParentBlock'>
         <h3>Все о Родителе</h3>
         <p> Текст этого пропса {parentdata.post}</p>
         <Child {...parentdata} />
      </div>
   )
}

export default Parent
