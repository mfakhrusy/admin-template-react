import { SET_SIDEBAR_FILTER,
  SEARCH_SIDEBAR_MAINBOARD,
  SET_SIDEBAR_MAINBOARD,
  USERS_FETCH_DATA_SUCCESS,
  USERS_IS_LOADING,
  USERS_HAS_ERRORED } from '../constants/actionTypes';
import 'whatwg-fetch';


export const setSidebarFilter = (showFilter) => {
  return {
    type: SET_SIDEBAR_FILTER,
    showFilter: showFilter
  };
}

export const searchSidebarMainboard = (searchText) => {
  return {
    type: SEARCH_SIDEBAR_MAINBOARD,
    searchText: searchText
  };
}

export const setSidebarMainboard = (showPage) => {
  return {
    type: SET_SIDEBAR_MAINBOARD,
    showPage: showPage  
  };
}

export const usersHasErrored = (bool) => {
  return {
      type: USERS_HAS_ERRORED,
      hasErrored: bool
  };
}

export const usersIsLoading = (bool) => {
  return {
      type: USERS_IS_LOADING,
      isLoading: bool
  };
}

export const usersFetchDataSuccess = (users) => {
  return {
    type: USERS_FETCH_DATA_SUCCESS,
    users: users
  };
}

// below is for redux thunk, action creator that return function instead of action

export const usersFetchData = (url) => {

  return ((dispatch) => {
    dispatch(usersIsLoading(true));
    fetch(url)
      .then((response) => {
       if (!response.ok) {
         throw Error(response.statusText);
       }

        dispatch(usersIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((users) => dispatch(usersFetchDataSuccess(users)))
      .catch(() => dispatch(usersHasErrored(true)));
  });
}