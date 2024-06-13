import { combineReducers } from '@reduxjs/toolkit'
import { RouterState, connectRouter } from 'connected-react-router'
import authReducer from './authReducer'
import { AuthState } from 'types/authTypes';

export interface RootState {
    auth: AuthState;
}

const rootReducer = (history: History) =>
	combineReducers({
		auth: authReducer,
		router: connectRouter(history),
	})
export default rootReducer

