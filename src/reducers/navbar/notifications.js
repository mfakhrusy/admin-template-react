import { NOTIFICATIONS_FETCH_DATA_SUCCESS } from '../../constants/actionTypes';

export function notifications(state = [], action) {
  switch (action.type) {
      case NOTIFICATIONS_FETCH_DATA_SUCCESS:
        return action.notifications;

      default:
        return state;
  }
}