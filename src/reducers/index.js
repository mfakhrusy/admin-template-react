import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { /*pageHasErrored, */pageIsLoading } from './globalReducer';
import { showFilter }  from './sidebar/showFilter';
import { searchText } from './sidebar/searchText';
import { pageItems } from './sidebar/pageItems';
import { users, usersHasErrored, usersIsLoading } from './sidebar/users';


const allReducers = combineReducers({
  searchText,
  showFilter,
  pageItems,
  //pageHasErrored,
  pageIsLoading,
  users,
  usersHasErrored,
  usersIsLoading,
  // router: routerReducer
});

export default allReducers;