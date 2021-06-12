import { combineReducers } from 'redux';
import { posts } from '../ducs/posts';
import { todos } from '../ducs/todos';

export default combineReducers({
  posts,
  todos,
});
