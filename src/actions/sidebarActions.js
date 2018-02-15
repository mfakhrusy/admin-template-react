import { SIDEBAR_FILTER } from '../constants/actionTypes';

const SIDEBAR_FILTER = 'SIDEBAR_FILTER';

export const setSidebarFilter = (filter) => {
  return {
    type: SIDEBAR_FILTER,
    filter: filter
  }
}