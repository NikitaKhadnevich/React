import { put, takeLatest } from 'redux-saga/effects';
import {
  GET_CIVIL_REQUESTED,
  ACTION_GET_CIVIL_Succeed,
  ACTION_GET_CIVIL_FAILED,
} from './actions';
// import { API } from '../api';

export function* getTodosSaga({ payload }) {
  console.log('saga');
  try {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const data = yield fetch(`${proxy}${payload}`,
      {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
      );
    const res = yield data.json();

    yield put(ACTION_GET_CIVIL_Succeed(res));
  } catch (e) {
    yield put(ACTION_GET_CIVIL_FAILED(e));
  }
}

export function* watchCivilSaga() {
  yield takeLatest(GET_CIVIL_REQUESTED, getTodosSaga);
}
