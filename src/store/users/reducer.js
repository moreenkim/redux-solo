import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  // isLoggedIn: {},
  token: null,
  profile: {},
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    // case types.IS_LOGGED_IN:
    //   return state.merge({
    //     isLoggedIn: action.userStatus
    //   })
    case types.TOKEN:
      return state.merge({
        token: action.token,
      });
    case types.USER_PROFILE:
      return state.merge({
        profile: action.profile,
      });
    default:
      return state;
  }
}

//selectors, get data from store
// export function getuserStatus(state) {
//   return state.userStatus.isLoggedIn
// }

export function getUserToken(state) {
  return state.users.token;
}

export function userAuthenticatedSelector(state) {
  return state.users.profile;
}
