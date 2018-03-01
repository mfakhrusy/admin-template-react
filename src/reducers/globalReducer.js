import { PAGE_IS_LOADING,
  PAGE_HAS_ERRORED } from '../constants/actionTypes';

export function usersHasErrored(state = false, action) {
  switch (action.type) {
      case PAGE_HAS_ERRORED:
          return action.pageHasErrored;

      default:
          return state;
  }
}

export function pageIsLoading(state = false, action) {
  switch (action.type) {
      case PAGE_IS_LOADING:
          return action.pageIsLoading;

      default:
          return state;
  }
}
