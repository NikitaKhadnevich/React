import React from 'react'
import { useState, useEffect } from 'react'
import RenderData from './RenderData'
import FetchData from './FetchData'

const AccumData = () => {

   return (
      <>
         <FetchData>
            {postsData => <RenderData postsData={postsData} />}
         </FetchData>
      </>   
   )
}

export default AccumData