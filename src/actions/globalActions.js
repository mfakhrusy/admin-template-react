import { PAGE_FETCH_DATA_SUCCESS,
  PAGE_IS_LOADING,
  PAGE_HAS_ERRORED } from '../constants/actionTypes';
import { usersFetchDataSuccess } from './sidebarActions';
import { notificationsFetchDataSuccess, newsfeedFetchDataSuccess } from './navbarActions';
import { galleryFetchDataSuccess } from './mainpageActions';
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
          switch (checkState) {
            case 'users':
              return (
                dispatch(usersFetchDataSuccess(responseJSON))
              );
            case 'notifications':
              return (
                dispatch(notificationsFetchDataSuccess(responseJSON))
              );
            case 'news':
              return (
                dispatch(newsfeedFetchDataSuccess(responseJSON))
              );
            case 'galleryImages':
              return (
                dispatch(galleryFetchDataSuccess(responseJSON))
              );
            case 'finished':
              return responseJSON;
            default:
              throw Error(response.statusText);  
          }
        })
        .then((response) => {
          dispatch(pageIsLoading(false)); // a little hack so the dispatch is sent after all files finished downloaded
          return response;
        })
        .catch(() => {
          return (
            dispatch(pageHasErrored(true))
          )}
        );
    }
  });
}
