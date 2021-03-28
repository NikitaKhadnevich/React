import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { ACTION_GET_CIVIL_Requested, ACTION_GET_CIVIL_REQUESTED_DETAIL , ACTION_GET_ROUTE_CIVIL_MENU } from '../../ducks/civil/actions';
import { Civildata , CivildataDetail } from '../../ducks/civil/selectors'
import CivDetailInfo from './CivDetailInfo'
import  { baseUrl, Urlpath } from '../Api/Api'

const CivInfo = (props) => {
   const { civilizations } = Urlpath
   const data = useSelector(Civildata)
   const civilDetail = useSelector(CivildataDetail)
   const  dispatches = useDispatch()

   const getFetch = (url, path, arr) => {
      if ( Boolean(arr) == false) {
        dispatches(ACTION_GET_CIVIL_Requested(`${url}/${path}`));
      } else null
    }
  
    useEffect(() => {
      getFetch(baseUrl, civilizations, data)
    }, []);

   const handleclick = (e) => {
         const targetPath = e.target.dataset.path
         dispatches(ACTION_GET_ROUTE_CIVIL_MENU(targetPath));
         targetPath == 'unique_unit'  ?
         dispatches(ACTION_GET_CIVIL_REQUESTED_DETAIL(data[e.target.id-1].unique_unit.join())) :
         targetPath == 'unique_tech' ?
         dispatches(ACTION_GET_CIVIL_REQUESTED_DETAIL(data[e.target.id-1].unique_tech.join()))
         : null
   }

   //1. Пройтись по масиву и забрать уникальное значение
   //2ю задиспатчить его уже в имеющийся новый массив

   // вставлю линку даты и создам новый стор для юниов 
   // путем распаршивания ее через джоин(например)
   // а уже потом у меня будет линковаться все как нужно

   const handleLocation = (props) => {
      window.history.go(-1)
   }
   
   const params = props.match.params.id

   return ( 
   <>
      <p id='goback' onClick={handleLocation}>Вернуться назад</p>
      {data && civilDetail && data.map((item, i) => {
         if (params === item.name) {
            return (
               <Router>
               <div className='Items' key={item.id+'terra'}>
                  <p key={item.id+'gera'}>Имя: {item.name}</p>
                  <p key={item.id+'tifon'}>Класс война: {item.expansion}</p>
                  <p key={item.id+'zeus'}>Тип Армии: {item.army_type}</p>
                  <p key={item.id+'artemida'}>Командный бонус: {item.team_bonus}</p>

                  <div key={Math.random()} className='CivilsItem'>
                     <Link to={`${props.match.url}/unique_unit`} id={item.id} onClick={handleclick} data-path='unique_unit'>Уникальный юнит {item.name}</Link>
                  </div>
                  <div key={Math.random()} className='CivilsItem2'>
                     <Link to={`${props.match.url}/unique_tech`} id={item.id} onClick={handleclick} data-path='unique_tech'>Уникальная технология {item.name}</Link>
                  </div>
                  <Switch>
                     <Route path={`${props.match.url}/:id`} component={CivDetailInfo} />
                  </Switch>
               </div>
               </Router>
            )
         } 
      })}
   </>
   )
}

export default CivInfo


