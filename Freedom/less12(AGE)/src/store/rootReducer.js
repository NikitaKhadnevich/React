import { combineReducers } from 'redux';
import { civil } from '../ducks/civil/reducer';
import { units } from '../ducks/units/reducer';

export default combineReducers({
  civil,
  units,
});
