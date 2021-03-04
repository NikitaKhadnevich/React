import { initialCounterState } from '../ducks/counter';
import { initialToloListState } from '../ducks/todos';
import { initialFormState } from '../ducks/form';

export const initialState = {
  counter: initialCounterState,
  todos: initialToloListState,
  form: initialFormState,
};
