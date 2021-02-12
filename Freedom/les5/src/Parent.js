import React from 'react';
import Child from './Child/Child'
import PreChild from './Child/PreChild/PreChild'


class Parent extends React.Component {
 

   render() {
      return (
         <>
            <Child>
               Это блок Ребенка
            </Child>   
         </>
      )
   }
}

export default Parent