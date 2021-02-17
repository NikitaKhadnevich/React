
import './App.css';
import React from 'react';
import Home from './Home/home';
import Contacts from './Contacts/contacts';
import Info from './Info/info';
import NotFound from './NotFound/NotFound';
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
            <Route exact path='/'  component={Home} />
            <Route path='/Contacts' component={Contacts} />
            <Route path='/Info' component={Info} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      
      </div>
    )

  }
}

export default App;
