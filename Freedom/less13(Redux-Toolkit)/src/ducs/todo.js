import { createSlice } from '@reduxjs/toolkit'

export const initialTodosState = {
   data: [],
   test: {}
} // Задаем стэйт

const todoReducer = createSlice(
   {
   name: ' todos-reducer',
   initialState: initialTodosState,// Забираем Стэйт
   reducers: { // Создаем редьюссеры
      ADD_TODO: (state, action) => { // Тут миксуются редьюссер и экшн
         state.data.push(action.payload);
         state.data.reverse()
      },
      TEST_TODO: (state, action) => { state.test[action.payload] = action.payload
      }
   }
}
)

export default todoReducer.reducer;
export const { ADD_TODO, TEST_TODO } = todoReducer.actions;
