import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import Text from '../../components/Text';

const SubHeader = () => {
  const {
    data: { subTitle },
    setCount,
  } = useContext(DataContext);

  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h2>{subTitle}</h2>
      <button onClick={handleClick}>Click</button>
      <Text />
    </div>
  );
};

export default SubHeader;
