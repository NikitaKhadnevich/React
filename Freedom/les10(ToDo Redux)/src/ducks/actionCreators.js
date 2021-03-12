import store from '../store';

const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';

export const ACTION_ON_INPUT_NAME = (value) => {
  const state = store.getState();

  return {
    type: 'NAMES',
    payload: value,
  };
};

export const ACTION_ON_INPUT_EMAIL = (value) => {
  return {
    type: 'EMAIL',
    payload: value,
  };
};

export const ACTION_ON_INPUT_PASSWORD = (value) => {
  return {
    type: 'PASSWORD',
    payload: value,
  };
};

export const ACTIONS_ADD_TODO = (value) => {
  return {
    type: ADD_TODO,
    payload: value,
  };
}

export const ACTION_EDIT_TODO = (value) => {
  return {
    type: EDIT_TODO,
    payload: value,
  }
}

export const ACTION_DELETE_TODO = (value) => {
  return {
    type: DELETE_TODO,
    payload: value,
  }
}