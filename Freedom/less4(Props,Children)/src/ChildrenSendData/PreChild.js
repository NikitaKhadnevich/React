import React from 'react'

const PreChild = (props) => {
   const { children } = props // Забираем опять и деструктурируем

   return (
      <div className='PreChild'>
         <h5>Все о ПреРебенке</h5>
         <p>Статья этого пропса {children.post}</p>
      </div> // Используем чайлды
   )
}

export default PreChild
