import { GET_CIVIL_REQUESTED, GET_CIVIL_SUCCEED,  GET_CIVIL_FAILED, GET_SPAN_STATUS, GET_ROUTE_MENU} from './actions';

export const initialCivilState = {
  data: [],
  error: null,
  url: '',
  isFetching: false,
  span: false,
  path: ''
};

export const civil = (state = initialCivilState, action) => {
  console.log('reducer');
  switch (action.type) {
    case GET_CIVIL_REQUESTED:
      return {
        ...state,
        url: action.payload,
      };
    case GET_CIVIL_SUCCEED:
      return {
        ...state,
        data: action.response,
      };
        // 6 результат заносится в редьюсер - стор
      case GET_CIVIL_FAILED:
        return {
        ...state,
        error: action.error,
      };
      case GET_SPAN_STATUS:
        return {
        ...state,
        span: action.span,
      };
      case GET_ROUTE_MENU:
        return {
        ...state,
        path: action.path,
      };
    default:
      return { ...state };
  }
}; 
