export const initialFormState = {
  names: '',
  email: '',
  password: '',
};

export const form = (state = initialFormState, action) => {
  switch (action.type) {
    case 'NAMES':
      return {
        ...state,
        names: action.payload,
      };
    case 'EMAIL':
      return {
        ...state,
        email: action.payload,
    };
    case 'PASSWORD':
      return {
        ...state,
        password: action.payload,
    };
    default:
      return {
        ...state,
      };
  }
};

