// src/sagas/authSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from '../actions/authActions';
import api from 'api/login'; // Assume you have an api utility for making HTTP requests
import { AccountInformation, UserLogin } from 'models/Auth';

function* loginSaga(action: { type: string; payload: UserLogin }): Generator {
    try {
        const response = yield call(api.login, action.payload);
        if (isAccountInformation(response)) {
            const user: AccountInformation = response;
            yield put(loginSuccess(user));
        } else {
            // Handle unexpected response
        }
    } catch (error: any) {
        yield put(loginFailure(error.message));
    }
}


function isAccountInformation(data: any): data is AccountInformation {
    // Implement logic to check if data matches the structure of AccountInformation
    // For example:
    return typeof data === 'object' && 'username' in data && 'password' in data;
}


export default function* watchAuth() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
}