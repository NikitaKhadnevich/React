export const GET_CIVIL_REQUESTED = 'GET_CIVIL_REQUESTED';
export const GET_CIVIL_SUCCEED = 'GET_CIVIL_SUCCEED';
export const GET_CIVIL_FAILED = 'GET_CIVIL_FAILED';
export const GET_SPAN_STATUS = 'GET_SPAN_STATUS';
export const GET_ROUTE_MENU = 'GET_ROUTE_MENU';

export const ACTION_GET_CIVIL_Requested = (url) => {
  console.log('action requested');
  return {
    type: GET_CIVIL_REQUESTED,
    payload: url,
  };
};

export const ACTION_GET_CIVIL_Succeed = (response) => {
  console.log('action succeed');
  return {
    type: GET_CIVIL_SUCCEED,
    response,
  };
};

export const ACTION_GET_CIVIL_FAILED = (error) => ({
  type: GET_CIVIL_FAILED,
  error,
});

export const ACTION_GET_CIVIL_SPAN = (span) => ({
  type: GET_SPAN_STATUS,
  span,
});

export const ACTION_GET_ROUTE_MENU = (path) => ({
  type: GET_ROUTE_MENU,
  path,
});
