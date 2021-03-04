export const initialFormState = {
  text: '',
  checkbox: false,
};

export const form = (state = initialFormState, action) => {
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        text: action.payload,
      };
    case 'CHECKBOX':
      return {
        ...state,
        checkbox: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
