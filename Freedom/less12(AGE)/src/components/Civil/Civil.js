import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_GET_CIVIL_Requested, ACTION_GET_CIVIL_SPAN } from '../../ducks/civil/actions';
import { connect } from 'react-redux';
// import { todosSelector } from './ducks/todos/selectors';

export const CivilSelector = (state) => state.civil.data.civilizations;
export const CivilSpan = (state) => state.civil.span


const Civil = (props) => {

  const data = useSelector(CivilSelector);
  const span = useSelector(CivilSpan);
  const dispatches = useDispatch();

  useEffect(() => {
   dispatches(ACTION_GET_CIVIL_Requested('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'));
  //  dispatches(ACTION_GET_CIVIL_Requested());
  }, []);
  

  // const swapSpan = () => {
  //   return 
  // }

  // console.log(`object`, object)

  const changeSpan = (e) => {
   e.preventDefault()
   const { onClickCHANGEcivil, statusSpan } = props
   onClickCHANGEcivil(!statusSpan)
 }

  // const units = () => {
  //   console.log(`object`, data.resources)
  //   const resourcesArr = []
  //   let obj = data.resources
  //   for (let key in obj) {
  //     resourcesArr.push(key)
  //   }
  //   console.log(`object`, resourcesArr)b
  // }  

  return (
    <>
     <div className='CivilizationsWrapper'>
      {data && data.map((item, index) => {
        return (
           <>
            <div className={index+'Item'}>
              <span key={item.id} className='showBtn' onClick={changeSpan}>
                  <p key={item.id+'prometey'}>{item.name}</p>
              {span ? '-' : '+'}
              </span>
              <hr></hr>
              {span && (<div className='Items' key={item.id+'terra'}>
                  <p key={item.id+'gera'}>Имя: {item.name}</p>
                  <p key={item.id+'tifon'}>Класс война: {item.expansion}</p>
                  <p key={item.id+'zeus'}>Тип Армии: {item.army_type}</p>
                  <a href={item.unique_unit}>Уникальный Юнит </a><br></br>
                  <a href={item.unique_tech}>Уникальная Технология </a>
                </div>)}
            </div>
          </>
          )
      })
    }    
      </div>
    </>
  )
};

const mapStateToProps = ({ civil }) => ({
   statusSpan: civil.span, 
 });

const mapDispatchToProps = (dispatch) => ({
   onClickCHANGEcivil: (statusSpan) => dispatch(ACTION_GET_CIVIL_SPAN(statusSpan)),
 });

export default  connect(mapStateToProps,mapDispatchToProps)(Civil)