//import _ from 'lodash';
import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  currentBootcamp: {},
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.CURRENT_BOOTCAMP_FETCHED:
      return state.merge({
        currentBootcamp: action.bootcampData,
      });
    default:
      return state;
  }
}

//selectors
export function getBootcamp(state) {
  return state.bootcamps.currentBootcamp;
}
