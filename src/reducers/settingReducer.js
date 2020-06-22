import {settingState} from './initialState';
import types from '../constants/actionTypes';

export default function reducer(setting = settingState, { type, payload }) {
  switch (type) {
    case types.STOP_FETCHING:
      return setting.update('fetchCount', count => count -1);
    case types.START_FETCHING:
      return setting.update('fetchCount', count => count + 1);
    default:
      return setting;
  }
}
