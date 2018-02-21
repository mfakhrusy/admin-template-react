import { SET_SIDEBAR_FILTER, SEARCH_SIDEBAR_MAINBOARD } from '../constants/actionTypes';


export const setSidebarFilter = (showFilter) => {
  return {
    type: SET_SIDEBAR_FILTER,
    showFilter: showFilter
  }
}

export const searchSidebarMainboard = (searchText) => {
  return {
    type: SEARCH_SIDEBAR_MAINBOARD,
    searchText: searchText
  }
}