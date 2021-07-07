import { useState, useEffect } from 'react';
import Form from './Components/Form'
import { database } from './firebase'

function App() {
  const [data, setData] = useState({})


  useEffect(() => {
    database()
      .ref('/')
      .on('value', (screenShot) => {
        setData(screenShot.val())
      })
  }, [])



  return (
    <>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      <Form />
      </>
  );
}

export default App;
