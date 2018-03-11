import { GALLERY_FETCH_DATA_SUCCESS,
  INCREMENT_GALLERY_IMAGE_LIKE_BUTTON,
  DECREMENT_GALLERY_IMAGE_LIKE_BUTTON } from '../../constants/actionTypes';

export function galleryImages(state = [], action) {
  switch (action.type) {
      case GALLERY_FETCH_DATA_SUCCESS:
        return action.galleryImages;

        

      case DECREMENT_GALLERY_IMAGE_LIKE_BUTTON:

      default:
        return state;
  }
}