import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_GET_UNIT_Requested, ACTION_GET_SPAN_UNIT_STATUS } from '../../ducks/units/actions';
import { connect } from 'react-redux';
// import { todosSelector } from './ducks/todos/selectors';

export const UnitSelector = (state) => state.units.dataUnit.units;
export const UnitSpan = (state) => state.units.span


const Units = (props) => {

  const dataUnit = useSelector(UnitSelector);
  const statusSpan = useSelector(UnitSpan);
  const dispatches = useDispatch();

  useEffect(() => {
   dispatches(ACTION_GET_UNIT_Requested('https://age-of-empires-2-api.herokuapp.com/api/v1/units'));
  }, []);
  
  const changeSpan = (e) => {
   e.preventDefault()
   const { onClickCHANGEunit, statusSpan } = props
   onClickCHANGEunit(!statusSpan)
 }

  return (
    <>
    <div className='UnitWrapper'>
      {dataUnit && dataUnit.map((item, index) => {
        return (
          <>
            <div className={index+'Item'}>
              <span key={item.id} className='showBtn' onClick={changeSpan}>
                  <p key={item.id+'prometey'}>{item.name}</p>
              {statusSpan ? '-' : '+'}
              </span>
              {statusSpan && (<div className='Items' key={item.id+'terra'}>
                  <p key={item.id+'gera'}>Имя: {item.name}</p>
                  <p key={item.id+'tifon'}>Особенность юнита: {item.description}</p>
                  <p key={item.id+'zeus'}>Стоимость: Золото:{item.cost.Wood}, Дерево:{item.cost.Gold}</p>
                  <a href={item.created_in}>Обитель создания</a>
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

const mapStateToProps = ({ units }) => ({
   statusSpan: units.span, 
});

const mapDispatchToProps = (dispatch) => ({
   onClickCHANGEunit: (statusSpan) => dispatch(ACTION_GET_SPAN_UNIT_STATUS(statusSpan)),
});

export default  connect(mapStateToProps,mapDispatchToProps)(Units)