import { useContext } from 'react'; // Забираем корнтекст
import DataContext from '../../context/DataContext';
import SubHeader from '../../components/SubHeaderCONTEXT/index';

const Header = ({ children }) => { 
  // Принимаем чилдов для КЛАССОВОГО ПОДХОДА

  const { data } = useContext(DataContext) // юзаем хук 

  return ( // Для Получения даты из контекста
    <div>
      <h3>{data.title}</h3>
      <SubHeader />
    </div>
  );
};

export default Header;














    // <DataContext.Consumer> 
    //   {
    //     (data) => (
    //         <div>
    //           <h3>{data.title}</h3>
    //           {children} 
    //         </div>
    //     )
    //   }
    // </DataContext.Consumer> // Отдаем чилдов ТАК мы пишем на классах
