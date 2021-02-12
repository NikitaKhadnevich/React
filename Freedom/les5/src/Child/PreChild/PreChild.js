import React from 'react';
import Child from '../Child';

class PreChild extends React.Component {

   render() {
      return (
         <>
            <h5>
               {this.props.children}
            </h5>            
         </>
      )
   }
}

export default PreChild