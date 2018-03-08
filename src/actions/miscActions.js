import { SET_MODAL_THEME_CHANGER } from '../constants/actionTypes';

export const setModalThemeChanger = (color) => {
  return {
    type: SET_MODAL_THEME_CHANGER,
    pageColor: color
  }
}