import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  hasError: false,
  errorMessage: null,
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.REQUEST_FAILURE:
      return Immutable({
        ...state,
        hasError: true,
        errorMessage: action.errorMessage,
      });
    case types.REQUEST_SUCCESS:
      return Immutable({
        ...state,
        hasError: false,
      });
    default:
      return state;
  }
}

//SELECTORS
export function getHasError(state) {
  return state.errorHandler.hasError;
}

export function getErrorMessage(state) {
  return state.errorHandler.errorMessage;
}
