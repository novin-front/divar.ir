import {createStore,applyMiddleware} from 'redux'
import reducer from './root-Reduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware  from "redux-saga";
import SagaApi from './root-saga'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(SagaApi);

export default store;