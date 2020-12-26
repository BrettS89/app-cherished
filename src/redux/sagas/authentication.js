import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import _ from 'lodash';
import * as actions from '../actions';
import api from '../../lib/api';
import alert from '../../utilities/alert';

export default [
  initializeAppWatcher,
  loginWatcher,
  logoutWatcher,
  registerWatcher,
];

function * registerWatcher() {
  yield takeLatest(actions.ON_REGISTER, registerHandler);
}

function * loginWatcher() {
  yield takeLatest(actions.ON_LOGIN, loginHandler);
}

function * initializeAppWatcher() {
  yield takeLatest(actions.INITIALIZE_APP, initializeAppHandler);
}

function * logoutWatcher () {
  yield takeLatest(actions.ON_LOGOUT, logoutHandler);
}

function * initializeAppHandler({ payload }) {
  try {
    const user = yield call(findCall, { service: 'security/session' });
    yield put({ type: actions.SET_USER_DATA, payload: user });

    if (user.account_id) {
      const promiseArr = [
        findCall({ service: 'content/album', payload: { account_id: user.account_id } }),
        getCall('security/account', user.account_id),
      ];
  
      const [albums, account] = yield Promise.all(promiseArr);
  
      yield put({ type: actions.SET_ALBUMS, payload: albums });
      yield put({ type: actions.SET_FAMILY, payload: account });
    }

    payload('Albums');
  } catch(e) {
    console.log('initializeAppHandler error', e);
    payload('Landing');
  }
}

function * registerHandler({ payload: { form, navigate } }) {
  try {
    yield put({ type: actions.APP_LOADING, payload: true });

    const user = yield call(authenticateCreateCalls, { service: 'security/user', payload: form});

    yield AsyncStorage.setItem('token', user.token);
    yield put({ type: actions.SET_USER_DATA, payload: user });

    yield put({ type: actions.APP_LOADING, payload: false });
    navigate();
  } catch(e) {
    yield put({ type: actions.APP_LOADING, payload: false });
    alert(e.message);
    console.log('registerHandler error', e);
  }
}

function * loginHandler({ payload: { form, navigate } }) {
  try {
    yield put({ type: actions.APP_LOADING, payload: true });
    const user = yield call(authenticateCreateCalls, { service: 'security/session', payload: form});
    yield AsyncStorage.setItem('token', user.token);
    yield put({ type: actions.SET_USER_DATA, payload: user });


    if (user.account_id) {
      const promiseArr = [
        findCall({ service: 'content/album', payload: { account_id: user.account_id } }),
        getCall('security/account', user.account_id),
      ];
  
      const [albums, account] = yield Promise.all(promiseArr);
  
      yield put({ type: actions.SET_ALBUMS, payload: albums });
      yield put({ type: actions.SET_FAMILY, payload: account });
    }
    
    navigate();
    yield put({ type: actions.APP_LOADING, payload: false });
  } catch(e) {
    yield put({ type: actions.APP_LOADING, payload: false });
    alert(e.message);
    console.log('loginHandler error: ', e.message);
  }
}

function * logoutHandler({ payload: navigate }) {
  try {
    yield put({ type: 'RESET' });
    yield AsyncStorage.clear();
    navigate();
  } catch(e) {
    console.log('logoutHandler error:', e);
  }
}

const authenticateCreateCalls = async ({ service, payload={} }) => {
  const data = await api.service(service).create(payload);
  return data;
};

const findCall = async ({ service, payload={} }) => {
  const { data } = await api.service(service).find(payload);
  return data;
};

const getCall = async (service, id) => {
  const { data } = await api.service(service).get(id);
  return data;
};
