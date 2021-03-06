import { USERS_FETCH_DATA_SUCCESS,
  USERS_IS_LOADING,
  USERS_HAS_ERRORED } from '../../constants/actionTypes';

import initialState from '../initialState';

export function usersHasErrored(state = false, action) {
  switch (action.type) {
      case USERS_HAS_ERRORED:
          return action.usersHasErrored;

      default:
          return state;
  }
}

export function usersIsLoading(state = false, action) {
  switch (action.type) {
      case USERS_IS_LOADING:
          return action.usersIsLoading;

      default:
          return state;
  }
}

export function users(state = [], action) {
  switch (action.type) {
      case USERS_FETCH_DATA_SUCCESS:
        return action.users;

      default:
        return state;
  }
}