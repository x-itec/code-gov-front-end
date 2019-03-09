import cloneDeep from 'lodash.clonedeep';

import { testReducerCommon } from 'testUtils/reducer';
import createResultsReducer from 'utils/reducers/create-results-reducer';

const PAGE = 'TEST-PAGE';

const initialState = {
  other: 'stuff',
  values: [1, 2, 3],
};

let state;
describe('utils - create-results-reducer', () => {
  beforeEach(() => {
    state = cloneDeep(initialState);
  });

  testReducerCommon(createResultsReducer, PAGE);

  describe('`UPDATE_${PAGE}_RESULTS` case', () => {
    it('should set the set the entire state as the `results`', () => {
      const action = { type: `UPDATE_${PAGE}_RESULTS`, results: { test: 'new-value' } };
      expect(createResultsReducer(PAGE)(state, action)).toEqual({ test: 'new-value' });
    });
  });
});