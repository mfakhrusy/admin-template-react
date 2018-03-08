import { GALLERY_FETCH_DATA_SUCCESS } from '../../constants/actionTypes';

export function galleryImages(state = [], action) {
  switch (action.type) {
      case GALLERY_FETCH_DATA_SUCCESS:
        return action.galleryImages;

      default:
        return state;
  }
}