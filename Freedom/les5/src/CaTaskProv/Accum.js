import React from 'react';
import CatFetch from './CatFetch'
import CatItem from './CatItem'
import './CatIndex.css';

class Accum extends React.Component {
   render() {
      return (
      <>   
         <div className='greatCat'>
            <CatFetch>
               {cat => <CatItem cat={cat} />}
            </CatFetch>
            {/* // Запускаю Провайдер и передаю пропсину CatItem. Тем самым говорю: "Вызови компонент(функцию по сути) CatItem с аргументом из childrenprops cat.// */
            }
         </div>
      </>   
      );
   }
}

export default Accum

//** Этот блок служит аккумуляторм для фетчового запроса и проводником для передачи на отрисовку в дочерний объект БЕЗ сохранения в стэйт */