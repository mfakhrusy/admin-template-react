import { SET_GALLERY_MODAL, SET_GALLERY_MODAL_IMAGE } from '../../constants/actionTypes';
import initialState from '../initialState';

export const galleryModalImageIsActive = (state = initialState.mainpage.gallery.galleryModalImageIsActive, action) => {
  let newState = JSON.parse(JSON.stringify(state)); // deep clone state to newState

  switch (action.type) {
    case SET_GALLERY_MODAL:
      return action.galleryModalImageIsActive;

    default:
      return newState;
  }
}

export const galleryImageUrl = (state = initialState.mainpage.gallery.galleryImageId, action) => {
  let newState = JSON.parse(JSON.stringify(state)); // deep clone state to newState

  switch (action.type) {
    case SET_GALLERY_MODAL_IMAGE:
      return action.galleryImageUrl;

    default:
      return newState;
  }
}