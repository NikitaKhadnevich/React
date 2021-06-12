import { createReducer, createAction } from '@reduxjs/toolkit'


export const initCounterState = {
   data: {
      item: [1,2,3],
      count: 0,
   }
}

export const counterSelector = (state) => ({
   count: state.counter.count,
});


export const INCREMENT = 'INCREMENT';
export const ACTION_INCREMENT = createAction(INCREMENT)

export const DECREMENT = 'DECREMENT';
export const ACTION_DECREMENT = createAction(DECREMENT)


export default createReducer(initCounterState, {
   [ACTION_INCREMENT]: (state, action) => {
      state.data.count = state.data.count + action.payload
   },
   [ACTION_DECREMENT]: (state, action) => {
      state.data.count = state.data.count - action.payload
   },
})