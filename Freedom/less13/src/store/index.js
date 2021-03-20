import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootreducer'

const middlewares = [];

export default configureStore( {
   reducer: rootReducer,
   middlewares: [...middlewares],
})