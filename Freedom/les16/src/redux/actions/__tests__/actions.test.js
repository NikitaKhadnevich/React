import {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
  VisibilityFilters,
} from '..';

describe('ACTIONS', () => {
  describe('addTodo', () => {
    it('should create action', () => {
      const text = 'Some text...';
      const expectedAction = {
        type: 'ADD_TODO',
        id: 0,
        text,
      };

      expect(addTodo(text)).toEqual(expectedAction);
    });
  });

  describe('setVisibilityFilter', () => {
    it('sholud create action', () => {
      let filter = 'SHOW_ALL';

      expect(setVisibilityFilter(filter).filter).toEqual(
        VisibilityFilters.SHOW_ALL
      );

      filter = 'SHOW_COMPLETED';

      expect(setVisibilityFilter(filter).filter).toEqual(
        VisibilityFilters.SHOW_COMPLETED
      );

      filter = 'SHOW_ACTIVE';

      expect(setVisibilityFilter(filter).filter).toEqual(
        VisibilityFilters.SHOW_ACTIVE
      );
    });
  });

  describe('toggleTodo', () => {
    it('should create action', () => {
      const mockedId = 1;
      const expectedAction = {
        type: 'TOGGLE_TODO',
        id: mockedId,
      };

      expect(toggleTodo(mockedId)).toEqual(expectedAction);
    });
  });
});
      