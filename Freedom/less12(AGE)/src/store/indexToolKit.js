import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootreducer' // Импортим рутовый редьюсер
import middlewares from './index'

export default configureStore({
   reducer: rootReducer,
   middleware: [...middlewares]
})