import { createSlice } from '@reduxjs/toolkit'
// export { initialStruState } from './reducer'

export const initialStruState = {
   dataSTRU: [],
   dataSTRUDetail: [],
   error: null,
   url: '',
   isFetching: false,
   path: ''
};

export const structures = createSlice(
   {
      name: 'structures-reducer',
      initialState: initialStruState,
      reducers: {
         GET_STRU_REQUESTED: (state, action) => {
            state,
            state.url = action.payload,
            state.isFetching = true
         },
         GET_STRU_SUCCEED: (state, action) => {
            state,
            state.dataSTRU = action.payload.structures,
            state.isFetching = false
         },
         GET_STRU_FAILED: (state, action) => {
            state,
            state.url = action.error,
            state.isFetching = false
         }
      }
   }
)

export default structures.reducer;
export const { GET_STRU_REQUESTED, GET_STRU_SUCCEED, GET_STRU_FAILED } = structures.actions;