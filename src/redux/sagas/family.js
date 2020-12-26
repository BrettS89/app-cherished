import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import _ from 'lodash';
import * as actions from '../actions';
import { userSelector } from '../selectors';
import api from '../../lib/api';
import alert from '../../utilities/alert';

export default [
  joinFamilyWatcher,
];

function * joinFamilyWatcher() {
  yield takeLatest(actions.JOIN_FAMILY, joinFamilyHandler);
}

function * joinFamilyHandler({ payload: { _id, status }}) {
  try {
    yield put({ type: actions.APP_LOADING, payload: true });
    const userState = yield select(userSelector);
    const result = yield call(patch, 'security/invitation', _id, { active: false });

    if (status) {
      const user = yield call(patch, 'security/user', userState._id, { account_id: result.account_id });
      yield put({ type: actions.SET_USER_DATA, payload: user });

      const promiseArr = [
        findCall({ service: 'content/album', payload: { account_id: user.account_id } }),
        getCall('security/account', user.account_id),
      ];
  
      const [albums, account] = yield Promise.all(promiseArr);
  
      yield put({ type: actions.SET_ALBUMS, payload: albums });
      yield put({ type: actions.SET_FAMILY, payload: account });
    }

    yield put({ type: actions.APP_LOADING, payload: false });
  } catch(e) {
    yield put({ type: actions.APP_LOADING, payload: false });
    console.log(e);
    alert(e.message);
  }
}

const findCall = async ({ service, payload={} }) => {
  const { data } = await api.service(service).find(payload);
  return data;
};

const getCall = async (service, id) => {
  const { data } = await api.service(service).get(id);
  return data;
};

const patch = async (service, id, data) => {
  return api.service(service).patch(id, data);
};