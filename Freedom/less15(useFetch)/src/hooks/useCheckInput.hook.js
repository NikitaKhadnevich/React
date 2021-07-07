import { useEffect } from 'react'

const useCheckInput = (value) => {
   useEffect(() => {
      console.log(`Value from useInput`, value)
   }, [value])
}

export default useCheckInput

