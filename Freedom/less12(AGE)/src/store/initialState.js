import { initialCivilState } from '../ducks/civil/reducer';
import { initialUnitsState } from '../ducks/units/reducer';

export const initialState = {
  civil: initialCivilState,
  units: initialUnitsState
  // structures: initialStructuresState,
  // technologies: initialTechnologiesState,
};
