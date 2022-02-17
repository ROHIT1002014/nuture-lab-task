import * as actionTypes from './actionTypes';

// actions
export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const toggleRequestLoader = (toggleValue) => ({
  type: actionTypes.TOGGLE_REQUEST_LOADER,
  toggleValue,
});
