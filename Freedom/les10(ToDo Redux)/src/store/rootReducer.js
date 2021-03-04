import { combineReducers } from 'redux';
import { counter } from '../ducks/counter';
import { todos } from '../ducks/todos';
import { form } from '../ducks/form';

export default combineReducers({
  counter,
  todos,
  form,
});
