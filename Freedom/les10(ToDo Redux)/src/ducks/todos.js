//ACTIONS
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// MY SELECTORS
export const todoSelector = (state) => state.todos.todos;

//ACTIONS CREATORS

export const ACTIONS_ADD_TODO = (value) => {
  return {
    type: ADD_TODO,
    payload: value,
  };
}

export const ACTION_EDIT_TODO = (id) => {
  return {
    type: EDIT_TODO,
    payload: id,
  }
}

export const ACTION_DELETE_TODO = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}

export const initialToloListState = {
  todos: [],
};

export const todos = (prevState = initialToloListState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...prevState,
        todos: [...prevState.todos, action.todo],
      };
      case 'EDIT_TODO':
        return {
          ...prevState,
          todos: [...prevState.todos, action.todo],
        };
        case 'DELETE_TODO':
          return {
            ...prevState,
            todos: [...prevState.todos, action.todo],
          };
        default:
          return {
            ...prevState,
          };
  }
};
