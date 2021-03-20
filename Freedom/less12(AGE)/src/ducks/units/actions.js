export const GET_UNITS_REQUESTED = 'GET_UNITS_REQUESTED';
export const GET_UNITS_SUCCEED = 'GET_UNITS_SUCCEED';
export const GET_UNITS_FAILED = 'GET_UNITS_FAILED';
export const GET_SPAN_UNITS_STATUS = 'GET_SPAN_UNITS_STATUS';
export const GET_ROUTE_UNIT_MENU = 'GET_ROUTE_UNIT_MENU';

export const ACTION_GET_UNIT_Requested = (url) => {
  console.log('action requested');
  return {
    type: GET_UNITS_REQUESTED,
    payload: url,
  };
};

export const ACTION_GET_UNITS_Succeed = (response) => {
  console.log('action succeed');
  return {
    type: GET_UNITS_SUCCEED,
    response,
  };
};

export const ACTION_GET_UNITS_FAILED = (error) => ({
  type: GET_UNITS_FAILED,
  error,
});

export const ACTION_GET_SPAN_UNIT_STATUS = (span) => ({
  type: GET_SPAN_UNITS_STATUS,
  span,
});

export const ACTION_GET_ROUTE_UNIT_MENU = (path) => ({
  type: GET_ROUTE_UNIT_MENU,
  path,
});
