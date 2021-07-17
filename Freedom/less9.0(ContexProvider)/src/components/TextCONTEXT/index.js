import { useContext, useState } from 'react';
import DataContext from '../../context/DataContext';


const Text = () => {

  
  const { data, count } = useContext(DataContext);
  // Забираем дату и уже ИЗМЕНЕННЫЙ  count

  return (
    <div>
      <h5>{data.text}</h5>
      <p>{count}</p> 
    </div> // А тут уже выводим результат

  );
};

export default Text;
















    // <DataContext.Consumer>
    //   {
    //     (data) => (
    //         <div>
    //           <h5>{data.text}</h5>
    //         </div>
    //     )
    //   }
    // </DataContext.Consumer>