// Импортим тулкик
import { createReducer, createAction } from '@reduxjs/toolkit'


//Создаем Стэйт
export const initCounterState = {
   data: [1,2,3],
   count: 0,
} 

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Создаем Экшн
export const ACTION_INCREMENT = createAction(INCREMENT)
export const ACTION_DECREMENT = createAction(DECREMENT)

// Созадем Редьюссер
export default createReducer(initCounterState, {
   [ACTION_INCREMENT]: (state, action) => {
      state.count += action.payload
   },
   [ACTION_DECREMENT]: (state, action) => {
      state.count -= action.payload
   },
})