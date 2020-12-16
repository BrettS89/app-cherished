import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import _ from 'lodash';
import * as actions from '../actions';
import api from '../../lib/api';
import alert from '../../utilities/alert';

export default [
  getAlbumsWatcher,
  getPhotosWatcher,
];

function * getAlbumsWatcher() {
  yield takeLatest(actions.GET_ALBUMS, getAlbumsHandler);
}

function * getPhotosWatcher() {
  yield takeLatest(actions.GET_PHOTOS, getPhotosHandler);
}

function * getAlbumsHandler() {
  try {
    const { data } = yield call(findStuff, { service: 'content/album' });
    yield put({ type: actions.SET_ALBUMS, payload: data });
  } catch(e) {
    console.log(e);
    alert(e.message);
  }
}

function * getPhotosHandler({ payload }) {
  try {
    yield put({ type: actions.APP_LOADING, payload: true });
    const { data } = yield call(findStuff, { service: 'content/photo', params: { album_id: payload._id, sort: 1 } });
    yield put({ type: actions.SET_PHOTOS, payload: data });
    yield put({ type: actions.APP_LOADING, payload: false });
  } catch(e) {
    yield put({ type: actions.APP_LOADING, payload: false });
    console.log(e);
    alert(e.message);
  }
}

const findStuff = async ({ service, params={} }) => {
  const data = api.service(service).find(params);
  return data;
};
