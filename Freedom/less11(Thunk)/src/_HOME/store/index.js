import { initialState } from './initialState';
import reducer from './rootReducer';

import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'; // Импортируем нашу мидлварочку-санк

import { getDataMiddleware } from '../middlewares/getDataMiddleware' // подключаем нашу мидлварочку
const reduxDevtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
const enhancers = [reduxDevtoolsExtension()]; // Забираем слушателя ()
const middlewares = [getDataMiddleware, thunkMiddleware]; // Создаем для энхенсера

const composedEnhacers = compose(applyMiddleware(...middlewares), ...enhancers); 
// compose - Берет весь список функций и прогоняет через вэлью, это нужно делать ибо у нас только одно место в createStore
// applyMiddleware - вызывает выполнение мидлварок

export default createStore(reducer, initialState, composedEnhacers);
