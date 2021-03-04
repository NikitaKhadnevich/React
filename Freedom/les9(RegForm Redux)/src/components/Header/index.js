import { useContext } from 'react';

import DataContext from '../../context/DataContext';
import SubHeader from '../../components/SubHeader';

const Header = () => {
  const {
    data: { title },
  } = useContext(DataContext);

  return (
    <div>
      <h1>{title}</h1>
      <SubHeader />
    </div>
  );
};

export default Header;
