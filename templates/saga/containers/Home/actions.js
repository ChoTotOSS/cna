import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from './constants';

export function fetchData(query) {
  return {
    type: FETCH_DATA,
    payload: {
      query,
    },
  };
}

export function fetchDataSuccess(response) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      response,
    },
  };
}

export function fetchDataFail(error) {
  return {
    type: FETCH_DATA_FAIL,
    payload: {
      error,
    },
  };
}
