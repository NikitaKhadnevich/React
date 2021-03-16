export const GET_TODOS_REQUESTED = 'GET_TODOS_REQUESTED';
export const GET_TODOS_SUCCEED = 'GET_TODOS_SUCCEED';
export const GET_TODOS_FAILED = 'GET_TODOS_FAILED';

export const ACTION_getTodosRequested = (url) => {
  console.log('action requested');
  return {
    type: GET_TODOS_REQUESTED,
    payload: url,
  };
}; // 2 происходит экшн

export const ACTION_getTodosSucceed = (response) => {
  console.log('action succeed');
  return {
    type: GET_TODOS_SUCCEED,
    response, // 5 Сюда приходит респонс из саги
  };
};

export const ACTION_getTodosFailed = (error) => ({
  type: GET_TODOS_FAILED,
  error,
}); // 5.1 Или error из саги
