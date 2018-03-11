import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { /*pageHasErrored, */pageIsLoading } from './globalReducer';
import { navbarThemeChangerIsActive } from './navbar/navbarThemeChanger';
import { notifications } from './navbar/notifications';
import { news } from './navbar/news';
import { galleryImages } from './mainpage/galleryImages';
import { galleryModalImageIsActive, galleryImageUrl } from './mainpage/galleryModal';
import { pageIsLocked } from './sidebar/pageLock';
import { showFilter }  from './sidebar/showFilter';
import { searchText } from './sidebar/searchText';
import { pageItems } from './sidebar/pageItems';
import { users, usersHasErrored, usersIsLoading } from './sidebar/users';
import { pageColor } from './misc/pageColor';


const allReducers = combineReducers({
  pageIsLocked,
  navbarThemeChangerIsActive,
  notifications,
  news,
  galleryImages,
  galleryModalImageIsActive,
  galleryImageUrl,
  searchText,
  showFilter,
  pageItems,
  //pageHasErrored,
  pageIsLoading,
  users,
  usersHasErrored,
  usersIsLoading,
  pageColor
});

export default allReducers;