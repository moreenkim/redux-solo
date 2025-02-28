import UserService from '../../services/users';
import * as types from './actionTypes';
import * as errorHandlerTypes from '../errorHandler/actionTypes';

// export function fetchUser(id) {
//   return async (dispatch) => {
//     try {
//       const userStatus = await UserDetails.getUserDetails(id)

//       dispatch ({
//         type: types.IS_LOGGED_IN,
//         userStatus
//       })
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

export function authenticateUserAction(payload) {
  return async (dispatch) => {
    try {
      const token = await UserService.authenticateUser(payload);

      dispatch({
        type: types.TOKEN,
        token,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function userAuthenticatedAction(token) {
  return async (dispatch) => {
    try {
      const profile = await UserService.userAuthenticated(token);

      dispatch({
        type: types.USER_PROFILE,
        profile,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function registerUser(payload) {
  return async (dispatch) => {
    try {
      const token = await UserService.newUserRegister(payload);
      dispatch({
        type: types.TOKEN,
        token,
      });
      dispatch({ type: errorHandlerTypes.REQUEST_SUCCESS });
    } catch (error) {
      dispatch({
        type: errorHandlerTypes.REQUEST_FAILURE,
        errorMessage: error,
      });
    }
  };
}
