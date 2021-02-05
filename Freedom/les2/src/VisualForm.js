import React from 'react';
class VisualForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
      }
   }

   render() {
      return (
      <>
         <p>{this.props.name}</p> {/* Принимаем и вывожу проп, как результат */}
      </>
      )
   }
}

export default VisualForm