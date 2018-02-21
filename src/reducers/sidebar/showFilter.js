import { SET_SIDEBAR_FILTER } from '../../constants/actionTypes';
import initialState from '../initialState';

export const showFilter = (state = initialState.sidebar.showFilter, action) => {
  let newState = JSON.parse(JSON.stringify(state)); // deep clone state to newState

  switch (action.type) {
    case SET_SIDEBAR_FILTER:
      return action.showFilter;

    default:
      return newState;
  }
}