import obj from './utils'
import { counterReducer } from '../ducs/counterReducer'

export default obj.combineReducer({
   counter: counterReducer
})