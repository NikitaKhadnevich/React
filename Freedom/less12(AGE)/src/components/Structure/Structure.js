import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ACTION_GET_STRU_Requested } from '../../ducks/structures/actions';
import { StructuresData } from '../../ducks/structures/selectors'

const Structures = (props) => {

  const baseUrl ='https://age-of-empires-2-api.herokuapp.com/api/v1/'
  const pathUrl = 'structures'
  const data = useSelector(StructuresData);
  const dispatches = useDispatch();
  
  const getFetch = ( url, path, arr) => {
    if ( Boolean(arr) == false) {
      dispatches(ACTION_GET_STRU_Requested(`${url}/${path}`));
    } else null
  }

  useEffect(() => {
    getFetch(baseUrl, pathUrl, data)
  }, []);

  return (
    <>
      <div className='StruWrapper'>
        {data && data.map((item, i) => {
          return (
            <div id={data.id} key={Math.random()} className='StruItem'>
              <Link to={`${props.match.url}/${item.name}`}>{item.name}</Link>
            </div>    
            )
        })
      }
      </div>
    </>
  )
};

export default  Structures