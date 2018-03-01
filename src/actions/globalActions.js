import { PAGE_FETCH_DATA_SUCCESS,
  PAGE_IS_LOADING,
  PAGE_HAS_ERRORED } from '../constants/actionTypes';
import { usersFetchDataSuccess } from './sidebarActions';
import urlApis from '../constants/urlApis';
import 'whatwg-fetch';


export const pageHasErrored = (bool) => {
  return {
      type: PAGE_HAS_ERRORED,
      pageHasErrored: bool
  };
}

export const pageIsLoading = (bool) => {
  return {
      type: PAGE_IS_LOADING,
      pageIsLoading: bool
  };
}

export const pageFetchDataSuccess = (pageData) => {
  return {
    type: PAGE_FETCH_DATA_SUCCESS,
    pageData: pageData
  };
}

// below is for redux thunk, action creator that return function instead of action

export const pageFetchData = (urlApis) => { // urlApis is an array of object containing all url API to fetch
  
  return ((dispatch) => {
    dispatch(pageIsLoading(true));
    for (const apiObj of urlApis) {
      // apiObj should have 4 key: id, url, label, and forState.
      fetch(apiObj.url)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
          return response;
        })
        .then((response) => {
          return (response.json());
        })
        .then((responseJSON) => {
          dispatch(pageIsLoading(false));
          let checkState = apiObj.forState;
          // console.log(typeof checkState);
          switch (checkState) {
            case 'users':
              return (
                dispatch(usersFetchDataSuccess(responseJSON))
              );
            default:

              throw Error(response.statusText);  
          }
        })
        .catch(() => {
          return (
            dispatch(pageHasErrored(true))
          )}
        );
    }
  });
}
