import { all, fork } from 'redux-saga/effects';
import authenticationSagas from './authentication';
import contentSagas from './content';
import familySagas from './family';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function * root() {
  yield all([
    ...forkList(authenticationSagas),
    ...forkList(contentSagas),
    ...forkList(familySagas),
  ]);
}
