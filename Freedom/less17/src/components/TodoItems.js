import React from 'react';
import { useEffect , useState , useRef } from 'react'
import { database } from './firebase'

function TodoItems (props) {
   const [data, setDataFromBase] = useState(
      {
      name: '',
      email: ''
   });
   const [arr, setArr] = useState([])

   const setRef = useRef();
   const setInnerRef = useRef();
   const pushRef = useRef();

   useEffect((props) => {
      database()
         .ref('/SET_DATA')
         .on('value', (snap) => {
            setDataFromBase(snap.val());
            console.log(`data`, data)
      });
   }, [])

   const upTodo = () => {
      setArr([...arr, data])
   };
   const updata = () => {
      props.getUp(upTodo);
   };

   const handleSubmitDel = () => {
      setRef.current.set(data.name).remove() //  удаляет поддерево
   } 

   return (
      <> 
      <button onClick={updata}>Add ToDo</button>  
         {arr.map((item, index) => {
         return (
            <div key={index+ 'Class'}className='todoBlock'>
               <p>name: {item.name}</p>
               <p>email: {item.email}</p>
               <button>Changes</button>
               <button onClick={handleSubmitDel}>Delete</button>
            </div>
            
         )})}
      </>
   );
}

export default TodoItems;
