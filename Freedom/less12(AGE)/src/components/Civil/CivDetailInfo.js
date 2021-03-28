import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { CivildataDetail, CivilisFetching, Civilpath } from '../../ducks/civil/selectors'
import { ACTION_GET_CIVIL_DETAIL_Succeed } from '../../ducks/civil/actions'

const CivDetailInfo = (props) => {

   const $ = useSelector(CivildataDetail);
   const fetchStatus = useSelector(CivilisFetching);
   const path = useSelector(Civilpath)
   const  dispatches = useDispatch()
   
   const handleLocation = () => {
      window.history.go(-1)
      dispatches(ACTION_GET_CIVIL_DETAIL_Succeed([]))
   }

   console.log(`DetailProps`, props)

   return (
      <>
         {
         ($.id && !fetchStatus && path == 'unique_unit') ? 
            <ul id='Skils'>
               <button onClick={handleLocation}>X</button>
               <li>Имя: {$.name}</li>
               <li>Фракция: {$.age}</li>
               <li>Броня: {$.armor}</li>
               <li>Атака: {$.attack}</li>
               <li>Уровень здоровья: {$.hit_points}</li>
               <li>Скорость перемещения: {$.movement_rate}</li>
               <li>Время перезарядки: {$.reload_time}</li>
               <li>Дальность видимости: {$.line_of_sight}</li>
               <ul className='AttackBonus'> 
                  <li>Бонус к атаке:</li>
                  <li>{$?.attack_bonus[0]}</li>
                  <li>{$?.attack_bonus[1]}</li>
                  <li>{$?.attack_bonus[2]}</li>
                  <li>{$?.attack_bonus[3]}</li>
                  <li>{$?.attack_bonus[4]}</li>
               </ul>
            </ul>
         : ($.id && !fetchStatus && path == 'unique_tech') ?
            <ul id='Skils'>
               <button onClick={handleLocation}>X</button>
               <li>Имя: {$.name}</li>
               <li>Фракция: {$.age}</li>
               <li>Описание: {$.description}</li>
               <li>Атака: {$.expansion}</li>
               <li>Стоимость постройки: {$.cost.Food} еда, {$.cost.Gold} золото</li>
               <li>Время постройки: {$.build_time}</li>
            </ul>
         : 
            <ul id='Skils'>
               <button onClick={handleLocation}>X</button>
               <li>У цивилизации нет уникального юнита </li>
            </ul>
         }
      </>
   )
}

export default CivDetailInfo
