import React from 'react'
import { useState, useEffect } from 'react'

const FetchData = (props) => {
   const posts = 'https://jsonplaceholder.typicode.com/posts'
   const [postsData, setPostsData] = useState([])

   useEffect(() => {
      async function getFetch() {
        const res = await fetch(posts);
        await res
          .json()
          .then(res => setPostsData(res))
          .catch(err => (err));
      }
      getFetch();
   }, []);

   const { children } = props
   return (
      <>
         {children(postsData)}
      </>
   );
};

export default FetchData


