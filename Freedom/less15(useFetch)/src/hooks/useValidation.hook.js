import { useState, useEffect } from 'react'

export const useValidation = (value, validations) => {
   const [isEmpty, setEmpty] = useState(true)
   const [minLengthError, setMinLengthError] = useState(false)
   const [isWarning, setWarning] = useState('')
   const [isMaxEmailLength, setMaxEmailLength] = useState('')
   const [isEmail, setEmail] = useState('')
   const [isPassword, setPassword] = useState('')

   const [validEmail, setvalidEmail] = useState(false)
   const [validPass, setvalidPass] = useState(false)

   useEffect( () => {
      for (const key in validations ) {
         switch (key) {
            case 'minLengthError' :
               value.length < validations[key] ? setMinLengthError('Слишком короткое значение!') : setMinLengthError(false) // Если длинна строки в ИНПУТЕ меньше чем заданов условии (компонент инпут firstNAme)
               break;
            case 'isEmpty' :
               value ? setEmpty(false) : setEmpty(true)
               break;
            case 'isWarning' :
               !value ? setWarning('Поле не должно быть пустым!') :
               setWarning(false)
               break;
            case 'isMaxEmailLength' :
               value.length > validations[key] ? setMaxEmailLength('Слишком длинное значение') : setMaxEmailLength(false)
               break;
            case 'isEmail' :
               const checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               checkEmail.test(String(value).toLowerCase()) ? setEmail(true) : setEmail('Данный адрес НЕ является email')
               break;
            case 'isPassword' :
               const checkPassword = /.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/;
               checkPassword.test(String(value)) ? setPassword(true) : setPassword('Пароль должен состоять из цифр и латинских букв верхнего и нижнего регистра')
               break;
            default :
               validations
               break; 
            }
         }
      }, [value] )
   
   useEffect( () => {
      isEmail === true &&
      isWarning === false &&
      minLengthError === false &&
      isMaxEmailLength === false ?
      setvalidEmail(true) : setvalidEmail(false) 

      isPassword === true &&
      isWarning === false &&
      minLengthError === false &&
      isMaxEmailLength === false ?
      setvalidPass(true) : setvalidPass(false)

   }, [isEmail, isPassword, isWarning, minLengthError, isMaxEmailLength])
   
      return {
         isEmpty, minLengthError, isWarning, isMaxEmailLength, isEmail, isPassword, validEmail, validPass
      }
   }

