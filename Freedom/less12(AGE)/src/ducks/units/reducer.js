import { GET_UNITS_REQUESTED, GET_UNITS_SUCCEED,  GET_UNITS_FAILED, GET_SPAN_UNITS_STATUS, GET_ROUTE_UNIT_MENU} from './actions';

export const initialUnitsState = {
  dataUnit: [],
  error: null,
  url: '',
  isFetching: false,
  span: false,
  path: ''
};

export const units = (state = initialUnitsState, action) => {
  console.log('reducer');
  switch (action.type) {
    case GET_UNITS_REQUESTED:
      return {
        ...state,
        url: action.payload,
      };
    case GET_UNITS_SUCCEED:
      return {
        ...state,
        dataUnit: action.response,
      };
        // 6 результат заносится в редьюсер - стор
      case GET_UNITS_FAILED:
        return {
        ...state,
        error: action.error,
      };
      case GET_SPAN_UNITS_STATUS:
        return {
        ...state,
        span: action.span,
      };
      case GET_ROUTE_UNIT_MENU:
        return {
        ...state,
        path: action.path,
      };
    default:
      return { ...state };
  }
}; 
