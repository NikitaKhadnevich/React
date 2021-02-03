import App from './App'
import React from 'react';

const RenderData = () => {
   const { data: { name, email, passw } } = this.state;
   return (
      <>
         <div>
            <div>Имя: {name}</div>
            <div>Почта: {email}</div>
            <div>Пароль: {passw}</div>
         </div>
      </>
   )
}

export default RenderData