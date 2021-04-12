import React from 'react'
import useFetch from './fetch.hook'


const Data = () => {
   const { data, error } = useFetch('http://jsonplaceholder.typicode.com/todos')
   console.log(`element`, data)
   console.log(`error`, error)

   return (
      <p>123</p>
   )
}

export default Data
