import { useContext } from 'react';
import DataContext from '../../context/DataContext';

const Text = () => {
  const {
    data: { text },
    count,
  } = useContext(DataContext);

  return (
    <>
    </>
  );
};

export default Text;
