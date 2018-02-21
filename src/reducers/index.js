import { combineReducers } from 'redux';
import { showFilter }  from './sidebar/showFilter';
import { searchText } from './sidebar/searchText';

const allReducers = combineReducers({
  showFilter,
  searchText
});

export default allReducers;