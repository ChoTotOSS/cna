import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DATA } from './constants';

import { fetchDataSuccess, fetchDataFail } from './actions';

import { config } from '@/config';
import request from '@/utils/request';

function* fetchData({ payload: { query } }) {
  try {
    const queryArray = Object.keys(query).map(key => {
      return `${key}=${query[key]}`;
    });
    const newQuery = queryArray.join('&');
    const url = `${config.api.hn}?${newQuery}`;
    const response = yield call(request, url);
    yield put(fetchDataSuccess(response));
  } catch (err) {
    yield put(fetchDataFail(err));
  }
}

export function* root() {
  yield takeLatest(FETCH_DATA, fetchData);
}

export default root;
