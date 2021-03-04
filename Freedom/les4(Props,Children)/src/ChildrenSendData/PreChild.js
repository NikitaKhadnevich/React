import React from 'react'

const PreChild = (props) => {
   const { children } = props

   return (
      <div className='PreChild'>
         <h5>Все о ПреРебенке</h5>
         <p>Статья этого пропса {children.post}</p>
      </div>
   )
}

export default PreChild
