import { combineReducers } from 'redux';
import counter from '../ducs/counter'
import todoReducer from '../ducs/todo'

export default combineReducers({
   counter,
   todoReducer
})

