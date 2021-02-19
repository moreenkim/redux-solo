import BootcampDetails from '../../services/bootcamps';
import * as types from './actionTypes';
import * as errorHandlerTypes from '../errorHandler/actionTypes';

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

export function writeReview(payload) {
  return async (dispatch) => {
    try {
      await BootcampDetails.addReview(payload);
      dispatch({
        type: errorHandlerTypes.REQUEST_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: errorHandlerTypes.REQUEST_FAILURE,
        errorMessage: error,
      });
    }
  };
}

export function readReviewAction(id) {
  return async (dispatch) => {
    try {
      const reviews = await BootcampDetails.readReview(id);
      dispatch({
        type: types.READ_REVIEWS,
        reviews,
      });
      dispatch({
        type: errorHandlerTypes.REQUEST_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: errorHandlerTypes.REQUEST_FAILURE,
        errorMessage: error,
      });
    }
  };
}
