import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import rootSaga from "../sagas/rootSaga";
import { persistedReducer } from "../reducers/rootReducer";

//persist configuration

const sagaMiddleware = createSagaMiddleware();
//compose with redux devTool
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store configuration
const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
//saga run

export default store;
