import { useReducer } from 'react' // 3.1 Забираем хук юз диспатч

import { easyReducer, initialTodosState } from '../ducs/todo' // 3.2 Забираем стэйт и редьюссер
import Items from '../component/Item'
import todoContex from '../context/todoContext' //3.3 Забираем контекст

const Todo = () => {
   const [dataReducer, dispatch] = useReducer(easyReducer, initialTodosState);

   return (
         <todoContex.Provider 
            value = {{
            dataReducer,
            dispatch
         }}> 
            <Items />   
            {dataReducer.dataTodo}
         </todoContex.Provider>
   );
}
export default Todo

/** 4 По итогу юз редьюссер дает нам право юзать инит стэйт только самого редьюссера компонента, но как сделать, чтобы раздать его всем иным компонентам?
Для этого мы используем наш контекст:
 - Передаем в Вэлью наши данные из инит стэйта(dataReducer)
 - Передаем любые данные, метод dispatch, который и позволяет дернуть экшн с данными на другом элементе*/
