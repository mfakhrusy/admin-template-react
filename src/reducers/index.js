import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';// import { BrowserRouter } from 'react-router-dom';
import { showFilter }  from './sidebar/showFilter';


const allReducers = combineReducers({
  showFilter: showFilter,
  router: routerReducer
});

export default allReducers;