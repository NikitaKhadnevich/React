import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { ACTION_GET_ROUTE_MENU } from './ducks/civil/actions'
import { ACTION_GET_ROUTE_UNIT_MENU } from './ducks/units/actions'
import Civil from './components/Civil/Civil';
import Units from './components/Units/Units';
import Home from './components/Home/Home';

const App = (props) => {


    const getDataCivil = (e) => {
        const { getDataCi } = props
        getDataCi(e.target.dataset.path)
    }

    const getDataUnits = (e) => {
      const { getDataUn } = props
      getDataUn(e.target.dataset.path)
  }

  return (
  <>
    <Router>
        <div className='Posts'>
          <div className='navigation'>
          <Link to='/'>Home</Link>
          <Link to='/civilizations' data-path='/civilizations' onClick={getDataCivil}>Цивилизации</Link>
          <Link to='/units'data-path='/units' onClick={getDataUnits}>Юниты</Link>
          <Link to='/structures'data-path='/structures' onClick={getDataCivil}>Структура Рассы</Link>
          <Link to='/technologies'data-path='/technologies' onClick={getDataCivil}>Технологии</Link>
          
            </div>
          <Switch> 
              <Route exact path='/' component={Home} />

              <Route exact path='/civilizations' component={Civil} />
              <Route path='/civilizations/:id' component={Civil} />

              <Route exact path='/units' component={Units} />
              {/* <Route exact path='/units/:id' component={Units} /> */}

              <Route exact path='/structures' component={Civil} />
              {/* <Route exact path='/structures/:id' component={TodoRender} /> */}

              <Route exact path='/technologies' component={Civil} />

          </Switch>
        </div>
    </Router>
</>
  );
}

export const mapStateToProps = ({ civil, units }) => ({
  pathCivil: civil.path,
  pathUnit: units.path
});

export const mapDispatchToProps = (dispatch) => ({
  getDataCi: (path) => {
    dispatch(ACTION_GET_ROUTE_MENU(path));
  },
  getDataUn: (path) => {
    dispatch(ACTION_GET_ROUTE_UNIT_MENU(path));
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
