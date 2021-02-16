
import './App.css';
import React from 'react';
import Home from './Components/Home/home';
import Contacts from './Components/Contacts/contacts';
import Info from './Components/Info/info';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'



  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
  }

  render() {
    return(
      <div>
        <Router>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/Contacts'>Contacts</Link>
            <Link to='/Info'>Info</Link>
          </nav>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Contacts' component={Contacts} />
            <Route path='/Info' component={Info} />
          </Switch>
        </Router>
        {/* <Home/>
        <Contacts />
        <Info /> */}
      </div>
    )

  }
}

export default App;
