import React from 'react'
import useFetch  from '../hooks/fetch.hook'

const Data = () => {
   const { data, error } = useFetch('http://jsonplaceholder.typicode.com/todos')
   // console.log(`element`, data)
   // console.log(`error`, error)

   return (
      <>
      {
         data && data.map((item,i) => {
            return (
               <p>{item.title}</p>
            )
         })
      }
      </>
   )
}

export default Data
