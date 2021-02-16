import React from 'react';

class PreChild extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
      }
   }

   render() {
      return (
         <>
            <li>
               {this.props.text}   
            </li>       
         </>
      )
   }
}

export default PreChild