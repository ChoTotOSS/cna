import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  SYNC_DATA_SERVER_CLIENT
} from './constants'

const initState = {
  fetching: false,
	data: []
}

export default function home(state = initState, action) {
  switch (action.type) {
    case SYNC_DATA_SERVER_CLIENT: {
      return {
        ...state,
        data: action.payload.data
      }
    }
    default:
      return state
  }
}
