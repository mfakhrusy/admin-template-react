import { GALLERY_FETCH_DATA_SUCCESS,
  INCREMENT_GALLERY_IMAGE_LIKE_BUTTON,
  DECREMENT_GALLERY_IMAGE_LIKE_BUTTON,
  TOGGLE_LIKE_BUTTON,
  REMOVE_GALLERY_IMAGE } from '../../constants/actionTypes';

export function galleryImages(state = [], action) {
  let newState = JSON.parse(JSON.stringify(state)); // deep clone state to newState
  let targetImage;// = Object.assign({}, newState);
  let counter = 0;

  switch (action.type) {
    case GALLERY_FETCH_DATA_SUCCESS:
      return action.galleryImages;        

    case INCREMENT_GALLERY_IMAGE_LIKE_BUTTON:
      for (let image of newState) {
        if (image.id === action.imageId) {
          targetImage = Object.assign({}, image);
          break;
        }
        counter++;
      }

      targetImage.like = targetImage.like + 1;

      const newStateBanget = [
        ...newState.slice(0, counter),
        targetImage,
        ...newState.slice(counter + 1, newState.length)
      ]

      return [
        ...newState.slice(0, counter),
        targetImage,
        ...newState.slice(counter + 1, newState.length)
      ];

    case DECREMENT_GALLERY_IMAGE_LIKE_BUTTON:
      for (let image of newState) {
        if (image.id === action.imageId) {
          targetImage = Object.assign({}, image);
          break;
        }
        counter++;
      }

      targetImage.like = targetImage.like - 1;

      return [
        ...newState.slice(0, counter),
        targetImage,
        ...newState.slice(counter + 1, newState.length)
      ];

    case TOGGLE_LIKE_BUTTON:
      for (let image of newState) {
        if (image.id === action.imageId) {
          targetImage = Object.assign({}, image);
          break;
        }
        counter++;
      }

      targetImage.isLiked = !targetImage.isLiked;

      return [
        ...newState.slice(0, counter),
        targetImage,
        ...newState.slice(counter + 1, newState.length)
      ];

    case REMOVE_GALLERY_IMAGE:

      return newState.filter((item) => {
        return (
          item.id !== action.imageId
        );
      });
          
    default:
      return newState;
  }
}