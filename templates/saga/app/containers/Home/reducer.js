import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from './constants';

const initState = {
  fetching: false,
  data: [],
};

export default function home(state = initState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        fetching: true,
      };
    }
    case FETCH_DATA_SUCCESS: {
      const {
        payload: { response },
      } = action;
      return {
        ...state,
        fetching: false,
        data: response,
      };
    }
    case FETCH_DATA_FAIL: {
      return {
        ...state,
        fetching: false,
      };
    }
    default:
      return state;
  }
}
