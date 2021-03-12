import { API } from '../api';
import { takeEvery } from 'redux-saga/effects'


export function* getTodosSaga() {
  try{
    const data = yield fetch('https://cat-fact.herokuapp.com/facts');
    yield put(GET_TODOS_SUCCEED)
  }
  catch(e) {
    getTodosFailed(e)
  }
}

export function todosSaga() {
  takeEvery(GET_TODOS_REQUESTED, getTodosSaga)
}


export const ACTION_GET_TODOS = (path) => async (dispatch) => {
  try {
    dispatch(getTodosRequested());

    const res = await API.get(path);
    const json = await res.json();

    dispatch(getTodosSucceed(json));
  } catch (error) {
    dispatch(getTodosFailed(error));
  }
};

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
