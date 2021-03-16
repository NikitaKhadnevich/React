import { put, takeLatest } from 'redux-saga/effects';
import {
  GET_TODOS_REQUESTED,
  ACTION_getTodosSucceed,
  ACTION_getTodosFailed,
} from './actions';

export function* getTodosSaga({ payload }) {
  console.log('saga');
    try {
      const data = yield fetch(payload,
        {
          mode: 'no-cors',
          headers: {
            "Content-Type": "application/json"
          },
        }
      );
    const res = yield data.json();
    console.log(`res`, res) // Сюда не доходит
    yield put(ACTION_getTodosSucceed(res));
    // 4 Парсится дата успешно/неуспешно
  } catch (e) {
    yield put(ACTION_getTodosFailed(e));
  }
}

export function* watchTodosSaga() {
  yield takeLatest(GET_TODOS_REQUESTED, getTodosSaga);
} // 4.1 передается в лобальную сагу объекта
