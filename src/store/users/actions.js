import UserService from '../../services/users';
import * as types from './actionTypes';

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
