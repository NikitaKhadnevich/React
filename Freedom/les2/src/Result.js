import AppCopy from './AppCopy'
import React from 'react';
import VisualForm from './VisualForm'

class Result extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         data: {
            name: '',
         },
      }
   }

   upDataFRST = (value) => {
      this.setState(prevState => ({
         ...prevState,
         data: {
            name: value,
         }
      }));
   };  /* Функция  меняет стэйт(name) у РОДИТЕЛЯ в зависимости от вэлью (коим выступает стэйт нэйм Чайлд1) Чайлд 1 */

   render() {
      return (
         <>
         <AppCopy upDataFRST={this.upDataFRST} /> 
         {/* Передаю солбэком в Чайлд 1 функцию РОДИТЕЛЯ */}
         <VisualForm name={this.state.data.name} />
         {/* Задаю название пропса для ЧАЙЛД*/}
         </>
      );
   }
}

export default Result



 
