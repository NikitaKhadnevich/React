
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTodosRequested } from '../src/ducks/actions'
import { todoSelector } from '../src/ducks/selector'


const App = () => {
  const data = useSelector(todoSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosRequested('https://cat-fact.herokuapp.com/facts'))
  }, [])

  useEffect(() => {
  }, [data])




  return (
    <>
      <p>Test</p>
    </>
  );
}

export default App;
