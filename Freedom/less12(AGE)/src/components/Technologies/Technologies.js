import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ACTION_GET_TECH_Requested } from '../../ducks/technologies/actions';
import { TechData } from '../../ducks/technologies/selectors'


const Technologies = (props) => {
  const baseUrl = 'https://age-of-empires-2-api.herokuapp.com/api/v1/'
  const pathUrl = 'technologies'

  const data = useSelector(TechData);
  const dispatches = useDispatch();

  const getFetch = (url, path, arr) => {
    if ( Boolean(arr) == false) {
      dispatches(ACTION_GET_TECH_Requested(`${url}/${path}`));
    } else null
  }

  useEffect(() => {
    getFetch(baseUrl, pathUrl, data)
  }, []);

  return (
    <>  
    <div className='TechWrapper'>
      {data && data.map((item, i) => {
        return (
            <div key={Math.random()} className='TechItem'>
                <Link to={`${props.match.url}/${item.name}`}>{item.name}</Link>
            </div>
          )
      })
    }    
      </div>
    </>
  )
};

export default Technologies