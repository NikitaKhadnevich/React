import { all } from 'redux-saga/effects';
import { watchCivilSaga, watchCivilDetailSaga } from '../ducks/civil/sagas';
import { watchUNITSaga, watchDETAILSaga } from '../ducks/units/sagas';
import { watchSTRUSaga, watchStruDETAILSaga } from '../ducks/structures/sagas';
import { watchTechSaga, watchTechDetailSaga } from '../ducks/technologies/sagas';

function* rootSaga() {
  yield all([
    watchCivilSaga(),
    watchCivilDetailSaga(),
    watchUNITSaga(),
    watchDETAILSaga(),
    watchSTRUSaga(),
    // watchStruDETAILSaga(), //Если Spa будет расширяться
    watchTechSaga(),
    watchTechDetailSaga()
  ]);
}

export default rootSaga;
  