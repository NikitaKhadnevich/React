import react from 'react'
import { useEffect, useState, useRef } from 'react'
import { database } from '../firebase'

function Form() {
   const [data, setData] = useState({
      name: '',
      email: ''
   })

   const pushRef = useRef()
   const setRef = useRef() // 1. Создаем нашу рефку для хранения данных БЕЗ вызова useEffect

   const handleChange = (e) => 
      setData({
      ...data,
      [e.target.name]: e.target.value
   }) // 2. Собираем дату с формы и кладем в стэйт data

   const handleSubmit = (e) => {
      e.preventDefault()
      //CREATE
      setRef.current.set(data) /* 3.1 Отправляем данные с data уже в реф через:
      - метод set - ПОЛНОСТЬЮ ПРЕЗАПИСЫВАЕТ ДАННЫЕ БАЗЫ ПО ПУТИ .ref('/SET_DATA')
      // setRef.current.child(`KEY_${data.name}`).set(data) 
      /* - метод child - СОЗДАЕТ Чайлд ОТ РОДИТЕЛЯ '/SET_DATA' c именем KEY_${data.name} и полями email name. Если ключи совпадают - перезаписывается имя KEY_${data.name} 
      //setRef.current.child(`/value/name/res/end)`).set(data) //можно создавать дофига поддиректорий (set_data/value/name/res/end) можно создать новую рефу и убрать длинную ссылку*/

      //UPDATE
      // setRef.current.child(`KEY_${data.name}`).update(data) 
      /*
      - метод update работает схоже с child однако также обновляет поле */

      // DELETE
      //setRef.current.child(`KEY_${data.name}`).set(null)
      // - метод child также может затирать дату целевого объекта, путем передачи нулевого значения set(null)
      //setRef.current.child(data.name).set(null) 
      // setRef.current.child(data.name).remove()
      //- методы удаляют поддерево полностью
      
      //РАБОТА С МАССИВАМИ
      //**********PUSH************ */
      // pushRef.current.push(data) // - метод пушит данные в массив с уникальным ключем
      //pushRef.current.child('/value/name/res/end').push(data) // можно создавать дофига поддиректорий (set_data/value/name/res/end) можно создать новую рефу и убрать длинную ссылку*/

      //**********DELETE************ */
      //pushRef.current.child('-MdCjkFw5lP3guOcIGd3').remove()  // метод для удаления нам нужно знать значение уникального ключа

      //**********UPDATE************ */
      //pushRef.current.child('-MdCjkFw5lP3guOcIGd3').update(data) // метод для обновления нам нужно знать значение уникального ключа




      setData({name:'', email:''}) //очищаем стэйт 
   }

   useEffect(() => { // Юзаем юзэффект для того, чтобы подтягивать данные из нашей базы на любе ее изменение
      pushRef.current = database().ref('/PUSH_DATA')
      setRef.current = database().ref('/SET_DATA')
   }, [])// 4. А тут уже срабатывает сам useEffect на наши действия по отправке формы

   return (
      <>
      <form onSubmit={handleSubmit}>
         <input name='name' type='text' value={data.name} onChange={handleChange}></input>
         <input name='email' type='text' value={data.email} onChange={handleChange}></input>
         <button>Send data</button>
      </form>
      </>
   );
 }
 
 export default Form;