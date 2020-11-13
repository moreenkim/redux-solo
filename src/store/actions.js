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
      console.error(error);
    }
  };
}

export function fetchAllBootcamps() {
  return async (dispatch) => {
    try {
      const bootcampsData = await BootcampDetails.getAllBootcamps();

      dispatch({
        type: types.ALL_BOOTCAMPS_FETCHED,
        bootcampsData,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
