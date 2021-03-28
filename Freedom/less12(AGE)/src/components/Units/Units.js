import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ACTION_GET_UNIT_Requested } from '../../ducks/units/actions';
import { Unitsdata } from '../../ducks/units/selectors'

const Units = (props) => {

  const baseUrl = 'https://age-of-empires-2-api.herokuapp.com/api/v1/'
  const pathUrl = 'units'
  const dataUnit = useSelector(Unitsdata);
  const dispatches = useDispatch();
 
  const getFetch = ( url, path, arr) => {
    if ( Boolean(arr) == false) {
      dispatches(ACTION_GET_UNIT_Requested(`${url}/${path}`));
    } else null
  }

  useEffect(() => {
    getFetch(baseUrl, pathUrl, dataUnit)
  }, []);

  console.log(`props.match`, props.match)

  return (
    <>  
    <div className='UnitWrapper'>
      {dataUnit && dataUnit.map((item, i) => {
        return (
            <div key={Math.random()} className='UnitItem'>
                <Link to={`${props.match.url}/${item.name}`}>{item.name}</Link>
            </div>
          )
      })
    }    
      </div>
    </>
  )
};

export default Units