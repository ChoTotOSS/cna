import request from '@/utils/request'
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  SYNC_DATA_SERVER_CLIENT
} from './constants'

import config from '@/config'

export async function fetchData (query) {
  const queryArray = Object.keys(query).map(key => {
    return `${key}=${query[key]}`
  })
  const newQuery = queryArray.join('&')
  const url = `${config.api.hn}?${newQuery}`
  return request(url)
}

export function syncData ({ data }) {
  return {
    type: SYNC_DATA_SERVER_CLIENT,
    payload: {
      data
    }
  }
}
