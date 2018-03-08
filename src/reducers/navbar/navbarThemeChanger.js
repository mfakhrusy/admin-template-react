import { SET_NAVBAR_THEME_CHANGER } from '../../constants/actionTypes';
import initialState from '../initialState';

export const navbarThemeChangerIsActive = (state = initialState.navbar.navbarThemeChangerIsActive, action) => {
  let newState = JSON.parse(JSON.stringify(state)); // deep clone state to newState

  switch (action.type) {
    case SET_NAVBAR_THEME_CHANGER:
      return action.navbarThemeChangerIsActive;

    default:
      return newState;
  }
}