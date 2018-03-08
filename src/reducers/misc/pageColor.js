import { SET_MODAL_THEME_CHANGER } from '../../constants/actionTypes';
import initialState from '../initialState';

export const pageColor = (state = initialState.misc.pageColor, action) => {
  let newState = JSON.parse(JSON.stringify(state)); // deep clone state to newState

  switch (action.type) {
    case SET_MODAL_THEME_CHANGER:
      return action.pageColor;

    default:
      return newState;
  }
}