import { all } from 'redux-saga/effects';
import { watchCivilSaga } from '../ducks/civil/sagas';
import { watchUNITSaga } from '../ducks/units/sagas';

function* rootSaga() {
  yield all([
    watchCivilSaga(),
    watchUNITSaga()]);
}

export default rootSaga;
  