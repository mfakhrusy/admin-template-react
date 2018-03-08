import { SET_NAVBAR_THEME_CHANGER,
  NOTIFICATIONS_FETCH_DATA_SUCCESS,
  NEWS_FETCH_DATA_SUCCESS } from '../constants/actionTypes';

export const setNavbarThemeChanger = (bool) => {
  return {
    type: SET_NAVBAR_THEME_CHANGER,
    navbarThemeChangerIsActive: bool
  }
}

export const notificationsFetchDataSuccess = (notifications) => {
  return {
    type: NOTIFICATIONS_FETCH_DATA_SUCCESS,
    notifications: notifications
  };
}

export const newsfeedFetchDataSuccess = (news) => {
  return {
    type: NEWS_FETCH_DATA_SUCCESS,
    news: news
  };
}