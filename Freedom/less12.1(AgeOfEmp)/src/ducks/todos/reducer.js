import { GET_TODOS_SUCCEED, GET_TODOS_REQUESTED } from './actions';

export const initialTodosState = {
  data: [],
  url: {},
  isFetching: false,
  error: null,
};

export const todos = (state = initialTodosState, action) => {
  console.log('reducer');
  switch (action.type) {
    case GET_TODOS_REQUESTED:
      return {
        ...state,
        url: action.payload,
      };
    case GET_TODOS_SUCCEED:
      return {
        ...state,
        data: action.response,
      };
        // 6 результат заносится в редьюсер - стор
      case GET_TODOS_SUCCEED:
        return {
        ...state,
        error: action.error,
      };
    default:
      return { ...state };
  }
}; //3 сюда приходит объект из экшн и если что-то удовлетворяет кейсу, то происходят изменения в сторе(к примеру у меня записался урл)
