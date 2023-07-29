import {fork, all} from 'redux-saga/effects';
// Sagas
import main from './mainSaga';

export default function* root() {
  yield all([fork(main)]);
}
