
import { createSlice } from "@reduxjs/toolkit";

// 1. Создаем стэйт, экшн6 редьюссер

export const initialTodosState = {
   dataTodo: '',
   dataHeader: ''
} 

export const ADD_TODO = 'ADD_TODO'
export const ADD_HEADER = 'ADD_HEADER'

export const ACTION_ADD_TODO = (payload) => ({
   type: ADD_TODO,
   payload,
})  
export const ACTION_ADD_HEADER = (payload) => ({
   type: ADD_HEADER,
   payload,
})  


export const easyReducer = (state = initialTodosState, action) => {
   switch (action.type) {
      case ADD_TODO:
         return {
            ...state,
            dataTodo: action.payload,
         };
      case ADD_HEADER:
         return {
            ...state,
            dataHeader: action.payload.toUpperCase(),
         };
      default:
         return {
            ...state,
         };
   }
}    

// Или на Redux-toolkit
const todoRed = createSlice({
   name: 'add_todo',
   reducers: {
      ACTION_ADD_TODO: (state, action) => {
         state.dataTodo = action.payload
      },
      ACTION_ADD_HEADER: (state, action) => {
         state.dataHeader = action.payload.toUpperCase()
      }
   },
   initialState: initialTodosState
})

// export const { ACTION_ADD_TODO, ACTION_ADD_HEADER } = todoRed.actions 
// export const easyReducer = todoRed.reducer

// Внимательно к экспортам нужно подойти^^^^^^^!!!