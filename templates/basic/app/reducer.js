import { combineReducers } from 'redux';
import home from '~/app/containers/Home/reducer';

export default function createReducer() {
  return combineReducers({
    home,
  });
}
