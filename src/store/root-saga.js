import {all} from 'redux-saga/effects';
import * as DrivarApi  from './divar/saga';
export default function* rootSaga() {
  yield all([
    DrivarApi.advertisingDataWatcher(),
    DrivarApi.getCategoryesDataWatcher()
  ]);
}