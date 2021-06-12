import { put, takeLatest } from 'redux-saga/effects';
// takeEvery - фильтрует ВСЕ, что проходит через сагу

// takeLatest - фильтрует и отрабатывает только ПОСЛЕДНИЙ из них

// throttle - блокирует запросы на n - кол-ва времени, чтобы юзер, как пример, не дергал сервак по 100 раз
/*export function* watchCivilDetailSaga() {
  yield throttle(5000,GET_CIVIL_REQUESTED_DETAIL, getDetailSaga);
} на 5000 млсек вот тут
*/

//yield select - позволяет дернуть в сагу наш превстор

import {
  GET_CIVIL_REQUESTED,
  ACTION_GET_CIVIL_Succeed,
  ACTION_GET_CIVIL_FAILED,
  GET_CIVIL_REQUESTED_DETAIL,
  ACTION_GET_CIVIL_DETAIL_Succeed,
  ACTION_GET_CIVIL_DETAIL_FAILED
} from './actions';
import { proxy, errorMes } from '../../components/Api/Api'

export function* getCivilSaga({ payload }) {
  try {
    const data = yield fetch(`${proxy}${payload}`,
      {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
      );
    const res = yield data.json();
    yield put(ACTION_GET_CIVIL_Succeed(res)); // 1. Вызываем Экшн на саге
    // yield put - тоже самое, что сделать диспатч
  } catch (error) {
    yield put(ACTION_GET_CIVIL_FAILED(errorMes));
  }
}

export function* getDetailSaga ( {payloadDetail} ) {
  try {
    const dataDetail = yield fetch(`${proxy}${payloadDetail}`,
    {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
    );
    const resDetail = yield dataDetail.json();
    yield put(ACTION_GET_CIVIL_DETAIL_Succeed(resDetail))
  } catch (error) {
    yield put(ACTION_GET_CIVIL_DETAIL_FAILED(errorMes))
  }
}

export function* watchCivilSaga() {
  yield takeLatest(GET_CIVIL_REQUESTED, getCivilSaga); // Отдаем в рутовую сагу результат с редьюссера, чтобы у нее была инфа о событиях
}
export function* watchCivilDetailSaga() {
  yield takeLatest(GET_CIVIL_REQUESTED_DETAIL, getDetailSaga);
}
