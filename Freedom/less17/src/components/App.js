import React from 'react';
import { useEffect , useState , useRef} from 'react'
import { database } from './firebase'
import Form from './Form'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import TodoItems from './TodoItems'
import Home from './Home'
import Cont from './Cont;'
import Home from './Home;'
import Home from './Home;'

function App() {
  const [data, setData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    database()
      .ref('/SET_DATA')
      .on('value', (snap) => {
        setData(snap.val());
        console.log(`data`, data)
    });
    
  }, [])  

  const getUp = (callback) => {
    alert()
    callback()
  }

  return (
    <>
      {/* <div className='App'>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div> */}
      <Form />
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/cont'>Cont</Link>
          <Link to='/info'>info</Link>
        </nav>
        <Switch>
          <Route path='/login' conponent={Login} />
          <Route path='/signup' conponent={Signup} />
          <PrivateRoute path='/login' exact conponent={Login} />
          <PrivateRoute path='/cont' exact conponent={Cont} />
          <PrivateRoute path='/info' exact conponent={Info} />
        </Switch>
      </Router>



    </>
  );
}

export default App;
