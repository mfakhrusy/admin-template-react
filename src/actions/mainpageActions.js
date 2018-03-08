import { GALLERY_FETCH_DATA_SUCCESS } from '../constants/actionTypes';

export const galleryFetchDataSuccess = (galleryImages) => {
  return {
    type: GALLERY_FETCH_DATA_SUCCESS,
    galleryImages: galleryImages
  };
}