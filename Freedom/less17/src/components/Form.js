import React from 'react';
import { useEffect , useState , useRef} from 'react'
import { database } from './firebase'
import TodoItems from './TodoItems';

function Form (props) {
   const [data, setData] = useState({
      name: '',
      email: ''
   });

   const setRef = useRef();
   const setInnerRef = useRef();
   const pushRef = useRef();

   useEffect(() => {
      setRef.current = database().ref('/PUSH_DATA');
      setInnerRef.current = database().ref('/SET_DATA/users/data/forms');
      pushRef.current = database().ref('/PUSH_DATA')
   }, []);

   const handleChange = (e) => {
      e.preventDefault()
      setData({
      ...data,
      [e.target.name]: e.target.value,
      })
   }

   const handleSubmit = () => {

   // CREATE
   //setRef.current.set(data) // создает юзера каждый раз новгого
   //setRef.current.child(`KEY_${data.name}`).set(data); // создает дочернее поддерево
   // setRef.current.child('users/data/forms/value').set(data); // создает дерево со слешами
   // setInnerRef.current.set(data); //  создает дерево директорий с готовыми дата

   //UPDATE
   // setInnerRef.current.set(data) // изменение даты внутри
   // setRef.current.child(`KEY_${data.name}`).update(data); // измененеи даты внутри ключа 

   //DELETE
   // setRef.current.child(data.name).set(null) // удаление поддерева
   // setRef.current.child(data.name).remove() //  удаляет поддерево

   // PUSH - работа с массивами
   // pushRef.current.push(data); // добавить в массив
   // pushRef.current.child('users/data/forms').push(data) // добавить в массивпо такому пути
   // pushRef.current.child('-MX704x_VHA9wtwnTbCq').remove(); // удалить элемент массива
   // pushRef.current.child('тут уникальный ключ массива').update(data) // обновить дату массива

      // setData({
      //    ...data,
      // });
   } 

   const getUp = (callback) => {
      callback()
      handleSubmit()
   }

return (
   <>
      <form>
         <input name='name' value={data.name} onChange={handleChange} />
         <input name='email' value={data.email} onChange={handleChange} />
      </form>
      <TodoItems getUp={getUp} />
   </>
);
}

export default Form;
