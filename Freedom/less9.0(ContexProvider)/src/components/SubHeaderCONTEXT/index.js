import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import Text from '../../components/TextCONTEXT';

const SubHeader = ({ children }) => {
  // Принимаем чилдов для КЛАССОВОГО ПОДХОДА
  
  const { data, setCount } = useContext(DataContext); // Забираем дату из контекста и забираем setState оттуда же

  const handleClick = () => {
    setCount((prev) => {
        return prev + 1});
  }  // Юзаем тут  - каждый раз на 1 увеличиваем count

  return (
    <div>
      <h4>{data.subTitle}</h4>
      <Text />
      <button onClick={handleClick}>Click</button>
    </div>

  );
};

export default SubHeader;



  



    //   <DataContext.Consumer>
    //     {
    //       (data) => (
    //           <div>
    //             <h4>{data.subTitle}</h4>
    //             {children}
    //           </div>
    //       )
    //     }
    //   </DataContext.Consumer>