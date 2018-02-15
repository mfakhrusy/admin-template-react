import { SIDEBAR_FILTER } from '../constants/actionTypes';
import initialState from './initialState';

export default SidebarReducers = (state = initialState.sidebar, action) {
  let newState = JSON.parse(JSON.stringify(state)); // deep clone state to newState

  switch (action.type) {
    case SIDEBAR_FILTER:
      return action.filter;

    default:
      return newState;

  }
}