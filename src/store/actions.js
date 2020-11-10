import _ from 'lodash';
import BootcampDetails from '../services/bootcamps';
import * as types from './actionTypes';

export function fetchBootcamp(id) {
  return async (dispatch) => {
    try {
      const bootcampData = await BootcampDetails.getBootcamp(id);

      dispatch({
        type: types.CURRENT_BOOTCAMP_FETCHED,
        bootcampData,
      });
    } catch (error) {
      dispatch({
        errorMessage: error,
      });
    }
  };
}
