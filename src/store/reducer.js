//import _ from 'lodash';
import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  currentBootcamp: {},
  allBootcamps: {},
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.CURRENT_BOOTCAMP_FETCHED:
      return state.merge({
        currentBootcamp: action.bootcampData,
      });
    case types.ALL_BOOTCAMPS_FETCHED:
      return state.merge({
        allBootcamps: action.bootcampsData,
      });
    default:
      return state;
  }
}

//selectors gets data from store
export function getBootcamp(state) {
  return state.bootcamps.currentBootcamp;
}

export function getAllBootcamps(state) {
  return state.bootcamps.allBootcamps;
}
