import {
   GET_TODOS_REQUESTED,
   GET_TODOS_SUCCEED,
   GET_TODOS_FAILED
} from './actions'

export const initialTodosState = {
   data: [],
   isFetching: false,
   error: null,
 };
 
 export const todos = (state = initialTodosState, action) => {
   switch (action.type) {
   case GET_TODOS_REQUESTED:
      return {
      ...state,
      isFetching: true,
      };
   case GET_TODOS_SUCCEED:
      return {
      ...state,
      data: action.response,
      isFetching: false,
      };
   case GET_TODOS_FAILED:
      return {
      ...state,
      error: action.error,
      isFetching: false,
      };
   default:
      return { ...state };
}
};