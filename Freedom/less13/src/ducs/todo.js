import { createSlice } from '@reduxjs/toolkit'

export const initialTodosState = {
   data: [],
}

export const todoSelector = (state) => state.todos.data;

const todoReducer = createSlice({
   name: ' todos-reducer',
   initialState: initialTodosState,
   reducers: {
      ADD_TODO: (state, action) => {
         state.data.push(action.payload);
         state.data.reverse()
      }
   }
})

export default todoReducer.reducer;

export const { ADD_TODO } = todoReducer.actions;