import React, { Children } from 'react';
import PreChild from './PreChild/PreChild'
class Child extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
      }
   }

   render() {
      return (
         <>
            <ul className='List'>
               {this.props.children}
            </ul>
         </>
      )
   }
}

Child.Item = PreChild

export default Child