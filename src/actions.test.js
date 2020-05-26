import * as actions from './actions';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

// Could add it in a setupTest file. Could export so it's available for all your tests. 
const mockStore = configureMockStore([thunkMiddleware])

it('should create an action to search robots', () => {
  const text = 'wooo';
  const expectedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text
  }
  expect(actions.setSearchField(text)).toEqual(expectedAction)

})

// dispatch...we need THUNK middleware, in order to run this. 
// Doing asynchonous things - CONFUSING
// Create a FAKE STORE that has Thunk middleware for any functions returned from actions
it('handles requesting robots api', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots())
  const action = store.getActions();
  console.log('action', action);

  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  }
  expect(action[0]).toEqual(expectedAction)

})