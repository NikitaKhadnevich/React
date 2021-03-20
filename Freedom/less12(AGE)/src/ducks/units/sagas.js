import { put, takeLatest } from 'redux-saga/effects';
import {
  GET_UNITS_REQUESTED,
  ACTION_GET_UNITS_Succeed,
  ACTION_GET_UNITS_FAILED,
} from './actions';
// import { API } from '../api';

export function* getUNITSaga({ payload }) {
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

    yield put(ACTION_GET_UNITS_Succeed(res));
  } catch (e) {
    yield put(ACTION_GET_UNITS_FAILED(e));
  }
}

export function* watchUNITSaga() {
  yield takeLatest(GET_UNITS_REQUESTED, getUNITSaga);
}
