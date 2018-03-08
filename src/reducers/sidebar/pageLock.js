import { SET_SIDEBAR_PAGE_LOCK } from '../../constants/actionTypes';
import initialState from '../initialState';


export function pageIsLocked(state = initialState.globalPage.pageIsLocked, action) {
  switch (action.type) {
      case SET_SIDEBAR_PAGE_LOCK:
          return action.pageIsLocked;

      default:
          return state;
  }
}