import { AccountInformation, UserLogin } from "models/Auth";

// src/actions/authActions.js
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = (credentials : UserLogin) => ({
    type: LOGIN_REQUEST,
    payload: credentials,
});

export const loginSuccess = (user : AccountInformation) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error : string) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

// export const loginRequest = createAction(LOGIN_REQUEST);
// export const loginSuccess = createAction(LOGIN_SUCCESS);
// export const loginFailure = createAction(LOGIN_FAILURE);


