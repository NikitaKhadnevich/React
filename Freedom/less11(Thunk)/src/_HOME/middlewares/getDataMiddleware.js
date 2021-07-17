import { ACTION_GET_POSTS } from '../ducs/posts';
import { ACTION_GET_TODOS } from '../ducs/todos';

const paths = {
  posts: '/posts',
  todos: '/todos'
};

export const getDataMiddleware = () => (dispatch) => (action) => {
  const { path } = action; // 4. Это наш экшн, МИДЛВАРОВСКИЙ из соседнего файла actions (ACTION_GET_POSTSMIDL, ACTION_GET_TODOSMIDL)


  switch (path) {
    // 4.1 Ниже проверяем: если path(e.target.dataset.path) = paths.post, то вызываем экшн с аргументом path
    case paths.posts: 
    console.log(`action path`, action.path)
      dispatch(ACTION_GET_POSTS(path)); 
      // 5. А вот тут уже и вызывается экшн с асинк-запросом РЕДЬЮССЕРА Редакс
      break; 
    case paths.todos:
      dispatch(ACTION_GET_TODOS(path));
      break; // Нужно стопать, ибо будет выстреливать уйма одинаковых экшенов, а нам нужен 1
    default:
      dispatch(action); // Обязательно прописывать, чтобы не стопорило поток
  }
};