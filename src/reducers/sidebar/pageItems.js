import initialState from '../initialState';

export const pageItems = (state = initialState.sidebar.pageItems, action) => {
  let newState = JSON.parse(JSON.stringify(state)); // deep clone state to newState

  return newState;
}