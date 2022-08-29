import {all, fork} from 'redux-saga/effects';
import weather from './weather';

export default function* rootSaga(): Generator {
  yield all([fork(weather)]);
}
