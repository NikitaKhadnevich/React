// Импортим тулкик
import { createReducer, createAction } from '@reduxjs/toolkit'


//Создаем Стэйт
export const initDATAState = {
   cats: '',
   catsReq: '',
   isFetching: false,
   error: ''
} 

export const getCat = (url) => async(dispatch) => {
   dispatch(ACTION_REQ_DATA('Ожидайте...'))

   try {
      const arr = await fetch(url)
      const res = await arr.json()
      dispatch(ACTION_GET_DATA(res))
      console.log(`res`, res)
   }
   catch (e) {
      dispatch(ACTION_FALL_DATA(e))
      console.log(`e`, e)
   }
}

export const GET_DATA = 'GET_DATA';
export const REQ_DATA = 'REQ_DATA';
export const FALL_DATA = 'FALL_DATA';

// Создаем Экшн
export const ACTION_GET_DATA = createAction(GET_DATA)
export const ACTION_REQ_DATA = createAction(REQ_DATA)
export const ACTION_FALL_DATA = createAction(FALL_DATA)

// Созадем Редьюссер
export default createReducer(initDATAState, {
   [ACTION_GET_DATA]: (state, action) => {
      state.cats = action.payload
      state.isFetching = false
   },
   [ACTION_REQ_DATA]: (state, action) => {
      state.catsReq = action.payload
      state.isFetching = true
   },
   [ACTION_FALL_DATA] : (state, action) => {
      state.error = 'Ошибка запроса'
      state.isFetching = false
   }
})