import { GALLERY_FETCH_DATA_SUCCESS,
  SET_GALLERY_MODAL,
  SET_GALLERY_MODAL_IMAGE,
  INCREMENT_GALLERY_IMAGE_LIKE_BUTTON,
  DECREMENT_GALLERY_IMAGE_LIKE_BUTTON,
  TOGGLE_LIKE_BUTTON,
  REMOVE_GALLERY_IMAGE } from '../constants/actionTypes';

export const galleryFetchDataSuccess = (galleryImages) => {
  return {
    type: GALLERY_FETCH_DATA_SUCCESS,
    galleryImages: galleryImages
  };
}

export const setGalleryModal = (bool) => {
  return {
    type: SET_GALLERY_MODAL,
    galleryModalImageIsActive: bool
  }
}

export const setGalleryModalImage = (imageUrl) => {
  return {
    type: SET_GALLERY_MODAL_IMAGE,
    galleryImageUrl: imageUrl
  }
}

export const incrementLikeButton = (imageId) => {
  return {
    type: INCREMENT_GALLERY_IMAGE_LIKE_BUTTON,
    imageId: imageId
  }
}

export const decrementLikeButton = (imageId) => {
  return {
    type: DECREMENT_GALLERY_IMAGE_LIKE_BUTTON,
    imageId: imageId
  }
}

export const toggleLikeButton = (imageId) => {
  return {
    type: TOGGLE_LIKE_BUTTON,
    imageId: imageId
  }
}

export const removeGalleryImage = (imageId) => {
  return {
    type: REMOVE_GALLERY_IMAGE,
    imageId: imageId
  }
}