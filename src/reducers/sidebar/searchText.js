import { SEARCH_SIDEBAR_MAINBOARD } from '../../constants/actionTypes';
import initialState from '../initialState';

export const searchText = (state = initialState.sidebar.searchText, action) => {
  let newState = JSON.parse(JSON.stringify(state)); // deep clone state to newState

  switch (action.type) {
    case SEARCH_SIDEBAR_MAINBOARD:
      return action.searchText;

    default:
      return newState;
  }
}