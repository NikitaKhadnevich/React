export const initialCounterState  = {
   count: 0,
} 

export const counterReducer = (state = initialCounterState, action) => {
   switch(action.type) {
      case 'INC':
         return {
         count: state.count + 1
      };
      default:
         return {
         ...state
      }
   }
};