import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import rootReducer from './reducers'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const sagaMiddleware = createSagaMiddleware()
const history = createBrowserHistory()
//config persist storage
const persistConfig = {
	key: 'root',
	storage,
	throttle: 500,
}
const persistedReducer = persistReducer(persistConfig, rootReducer(history))
export default function configureStore() {
	const middlewares = [sagaMiddleware, routerMiddleware(history)]

	const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares))
	const store = createStore(persistedReducer, composedEnhancer)
	let persistor = persistStore(store)

	sagaMiddleware.run(rootSaga)
	return { store, persistor }
}

 