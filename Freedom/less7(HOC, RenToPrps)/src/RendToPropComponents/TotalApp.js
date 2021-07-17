import React from 'react';
import ReactDOM from 'react-dom';
import Rone from './RenderProps/Rone'
import Rtwo from './RenderProps/Rtwo'
import Rthree from './RenderProps/Rthree'


const TotalApp = () => {
   return (
      <>
         <Rone /> 
         <Rtwo />,
         <Rthree />
      </>
   )
}

// Для дальнейшей передачи формы уже в 3 компонент нужно прописать <Rone render={ ({name, email, pass, secondName, birth, telNumb}) }

export default TotalApp