import { all } from 'redux-saga/effects';
import Home from './containers/Home/saga';

export default function* AppSaga() {
  yield all([Home()]);
}
