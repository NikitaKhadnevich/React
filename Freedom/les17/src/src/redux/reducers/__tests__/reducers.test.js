import todos from '../todos';

describe('Todos reducer', () => {
  it('should return [] when initial state and action are undefined', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it('should update initial state by adding 1 Todo to the list', () => {
    const addTodoAction = {
      type: 'ADD_TODO',
      id: 1,
      text: 'Some text...',
    };

    expect(todos([], addTodoAction)).toEqual([
      {
        id: addTodoAction.id,
        text: addTodoAction.text,
        completed: false,
      },
    ]);
  });

  it('should update initial state by adding 2 Todo to the list', () => {
    const initialState = [
      {
        id: 1,
        text: 'Some text...',
        completed: false,
      },
    ];

    const addTodoAction = {
      type: 'ADD_TODO',
      id: 2,
      text: 'Some text 2...',
    };

    expect(todos(initialState, addTodoAction)).toEqual([
      ...initialState,
      {
        id: addTodoAction.id,
        text: addTodoAction.text,
        completed: false,
      },
    ]);
  });

  it('should toggle incomplete Todo to complete', () => {
    const initialState = [
      {
        id: 1,
        text: 'Some text...',
        completed: false,
      },
    ];

    const toggleTodoAction = {
      type: 'TOGGLE_TODO',
      id: 1,
    };

    expect(todos(initialState, toggleTodoAction)).toEqual([
      {
        id: 1,
        text: 'Some text...',
        completed: true,
      },
    ]);
  });
});
