export const initialTodoState = {
  todoInit: [],
};

//ACTIONS
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// MY SELECTORS
// export const todoSelector = (state) => state.todo.todo;

//ACTIONS CREATORS

export const todo = (prevState = initialTodoState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...prevState,
        todoInit: [...prevState.todoInit, action.payload],
      };
      case 'EDIT_TODO':
        return {
          ...prevState,
          todoInit: [...prevState.todoInit, action.payload],
        };
      case 'DELETE_TODO':
        return {
          todoInit: action.payload,
        };
      default:
        return {
          ...prevState,
        };
  }
};
