import { combineReducers } from 'redux'; // Тут отличий от классики нет никакой
import counter from '../ducs/counter'
import todoReducer from '../ducs/todo'
import dataCat from '../ducs/data'

export default combineReducers({
   counter,
   todoReducer,
   dataCat
})
