import { all } from 'redux-saga/effects';
import { watchTodosSaga } from '../ducks/sagas'

function rootSaga() {
   yield all([
      watchTodosSaga
   ])
}

export default rootSaga