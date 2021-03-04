import React from 'react'
import FetchCar from './FetchCar'
import RenderCar from './RenderCar'
import { useState, useEffect} from 'react';

const AccumCar = () => {
   // const [accum, setAccum] = useState(null)
   // const upState = (cars) => {
   //    return setAccum(cars)
   // }

   return (
      <>
      {/* <FetchCar upState={upState} />
      <RenderCar accum={accum} /> */}

      <FetchCar>
         {cars => <RenderCar cars={cars} />}
      </FetchCar>
      </>
   )
}

export default AccumCar
