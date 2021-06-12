import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootreducer' // Импортим рутовый редьюсер

const middlewares = []; // И мидлварки

export default configureStore( {
   reducer: rootReducer,
   middlewaressss: [...middlewares], // Кофигурим это все
})