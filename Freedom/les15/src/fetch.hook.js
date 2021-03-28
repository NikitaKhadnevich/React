import React from 'react'
import { useState, useEffect } from 'react'


const useFetch = (url, option) => {
   const [data, setData] = useState(0);
   const [errors, setError] = useState(0);

   useEffect(() => {
      async function fetchData() {
         const res = await fetch(url);
         await res
           .json()
           .then(res => setData(res))
           .catch(err => setError(err));
      };
      fetchData()
      }, [url]);

      return { data, errors}
      
}

export default useFetch

