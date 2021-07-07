import { initialCivilState } from '../ducks/civil/reducer';
import { initialUnitsState } from '../ducks/units/reducer';
// import { initialStruState } from '../ducks/structures/reducer';
import { initialStruState } from '../ducks/structures/Act_Red_Kit'
import { initialTECHState } from '../ducks/technologies/reducer';

export const initialState = {
  civil: initialCivilState,
  units: initialUnitsState,
  structures: initialStruState,
  technologies: initialTECHState,
};
