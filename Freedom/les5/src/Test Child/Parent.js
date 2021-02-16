import React from 'react';
import Child from './Child/Child'


const arr =  [
   {
     id: 1,
     title: 'Header 1',
     text: 'Text 1',
   },
   {
     id: 2,
     title: 'Header 2',
     text: 'Text 2',
   },
   {
     id: 3,
     title: 'Header 3',
     text: 'Text 3',
   }
 ];
class Parent extends React.Component {


   render() {
      return (
         <>
         <div>
            <Child>
            {
            arr.map(item => <Child.Item text={item.text} />)
            }    
            </Child>
         </div>       
         </>
      )
   }
}

export default Parent