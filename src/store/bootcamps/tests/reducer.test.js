import Immutable from 'seamless-immutable';
import { Reducer } from 'redux-testkit';
import * as actionTypes from '../actionTypes';

import bootcamps from '../reducer';

const initialState = {
  currentBootcamp: {},
  allBootcamps: {},
};

describe('store/bootcamps/reducer', () => {
  it('should have initial state', () => {
    expect(bootcamps()).toEqual(initialState);
  });

  it('should not affect state', () => {
    Reducer(bootcamps)
      .expect({ type: 'NOT_EXISTING' })
      .toReturnState(initialState);
  });

  it('should store fetched bootcamp', () => {
    const currentBootcamp = {
      data: {
        name: 'name',
        phone: 'phone',
        email: 'email',
        description: 'description',
      },
    };
    const action = {
      type: actionTypes.CURRENT_BOOTCAMP_FETCHED,
      bootcampData: currentBootcamp,
    };
    Reducer(bootcamps)
      .expect(action)
      .toReturnState({ ...initialState, currentBootcamp });
  });

  it('should store fetched bootcamp and override existing bootcamp', () => {
    const currentBootcamp = {
      data: {
        name: 'name',
        phone: 'phone',
        email: 'email',
        description: 'description',
      },
    };
    const existingState = Immutable({
      ...initialState,
      currentBootcamp: { location: 'location' },
    });

    const action = {
      type: actionTypes.CURRENT_BOOTCAMP_FETCHED,
      bootcampData: currentBootcamp,
    };
    Reducer(bootcamps)
      .withState(existingState)
      .expect(action)
      .toReturnState({ ...initialState, currentBootcamp });
  });
});

describe('store/bootcamps/reducer', () => {
  it('should have initial state', () => {
    expect(bootcamps()).toEqual(initialState);
  });

  it('should not affect state', () => {
    Reducer(bootcamps)
      .expect({ type: 'NOT_EXISTING' })
      .toReturnState(initialState);
  });

  it('should store all fetched bootcamps', () => {
    const allBootcamps = {
      success: true,
      count: 4,
      pagination: {},
      data: [
        {
          name: 'name',
          phone: 'phone',
          email: 'email',
          description: 'description',
        },
      ],
    };
    const action = {
      type: actionTypes.ALL_BOOTCAMPS_FETCHED,
      bootcampsData: allBootcamps,
    };
    Reducer(bootcamps)
      .expect(action)
      .toReturnState({ ...initialState, allBootcamps });
  });

  it('should store all fetched bootcamps and override existing bootcamps', () => {
    const allBootcamps = {
      success: true,
      count: 4,
      pagination: {},
      data: [
        {
          name: 'name',
          phone: 'phone',
          email: 'email',
          description: 'description',
        },
      ],
    };
    const existingState = Immutable({
      ...initialState,
      allBootcamps: { website: 'website' },
    });

    const action = {
      type: actionTypes.ALL_BOOTCAMPS_FETCHED,
      bootcampsData: allBootcamps,
    };
    Reducer(bootcamps)
      .withState(existingState)
      .expect(action)
      .toReturnState({ ...initialState, allBootcamps });
  });
});
