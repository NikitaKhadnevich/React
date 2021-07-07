import { combineReducers } from 'redux';
import { civil } from '../ducks/civil/reducer';
import { units } from '../ducks/units/reducer';
// import { structures } from '../ducks/structures/reducer';
import  structures  from '../ducks/structures/Act_Red_Kit';
import { technologies } from '../ducks/technologies/reducer';

export default combineReducers({
  civil,
  units,
  structures,
  technologies,
});
