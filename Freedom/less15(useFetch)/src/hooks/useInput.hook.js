import { useState } from 'react'
import { useValidation } from './useValidation.hook'
 
export const useInput = (initState, validations) => {
   const [value, setValue] = useState(initState)
   const [isBlur, setBlur] = useState(false)
   const valid = useValidation(value, validations)

   const onChange = (e) => {
      setValue(e.target.value)
   }

   const onBlur = (e) => {
      setBlur(true)
      console.log(`Пропал фокус на элементе ${e.target.name}`)
   }

   return {
      value, onChange, onBlur, isBlur, ...valid // В valid лежит isEmpty, isWarning и minLengthError
   }
}

// export const useAddButton = (element) => {
//    const [button, setButton] = useState([])
//    useEffect(
//       () => {
//       button.push(element)
//       setButton(button)
//       }, [element]
//    );
   
//    return (
//       button
//    )
// }

