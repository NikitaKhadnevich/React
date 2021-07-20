import { initialCivilState } from '../ducks/civil/reducer';
import { initialUnitsState } from '../ducks/units/reducer';
// import { initialStruState } from '../ducks/structures/reducer'; // Тут берем если через ducs (reducer, action)
import { initialStruState } from '../ducks/structures/Act_Red_Kit' // А тут у меня он написан через slice redux-toolkit
import { initialTECHState } from '../ducks/technologies/reducer';

export const initialState = {
  civil: initialCivilState,
  units: initialUnitsState,
  structures: initialStruState,
  technologies: initialTECHState,
};
