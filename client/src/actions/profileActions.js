import axios from 'axios';
import { CLEAR_CURRENT_PROFILE, GET_PROFILE, PROFILE_LOADING } from './types';

// Get Current Profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());

  axios
    .get('/api/profile')
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(() => {
      dispatch({
        type: GET_PROFILE,
        payload: {}
      });
    });
};

// Profile Loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
