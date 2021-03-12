import { put, takeLatest, takeEvery } from 'redux-saga/effects'
import {
      GET_TODOS_REQUESTED,
      getTodosSucceed,
      getTodosFailed
} from './actions'

export function* getTodosSaga( ) {
   try{
     const data = yield fetch('https://cat-fact.herokuapp.com/facts');
     const res = data.json();
     yield put(getTodosSucceed(res));
   }
   catch(e) {
     yield put(getTodosFailed(e));
   }
 }
 
 export function* watchTodosSaga() {
   takeEvery(GET_TODOS_REQUESTED, getTodosSaga)
 }