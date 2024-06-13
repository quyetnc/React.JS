// src/sagas/index.js
import { all } from 'redux-saga/effects';
import watchAuth from './authSaga';

export default function* rootSaga() {
    yield all([
        watchAuth(),
    ]);
}
