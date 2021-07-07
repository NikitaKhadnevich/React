import React from 'react';


class Child2 extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         data: {
            name: '',
            email: '',
            passw: ''
         },
      }
   }


   render() {
      return (
         <>            
          <header role="banner">
             <p>Привет, пострыжыся</p>
            {this.props.text},
          </header>
         </>
      )
   }
}

export default Child2