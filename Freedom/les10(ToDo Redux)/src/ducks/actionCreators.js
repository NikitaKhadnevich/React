import store from '../store';

export const ACTION_ON_INPUT_CHANGE = (value) => {
  const state = store.getState();

  console.log(state);

  return {
    type: 'INPUT',
    payload: value,
  };
};

export const ACTION_ON_SELECT = (checked) => {
  return {
    type: 'CHECKBOX',
    payload: checked,
  };
};
