import * as demoAction from '../actions/mainAction';
import * as TYPES from '../actions/types';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {mainApi} from '../api/mainApi';

function* demonstrateDemo(action) {
  try {
    const response = yield call(mainApi.demonstrateDemoGetApi, action.data);
    yield put(demoAction.demonstrateDemoSuccess(response.data));
  } catch (error) {
    yield put(demoAction.demonstrateDemoFailure());
  }
}

function* main() {
  yield all([takeLatest(TYPES.DEMO_ACTION_START, demonstrateDemo)]);
}

export default main;
