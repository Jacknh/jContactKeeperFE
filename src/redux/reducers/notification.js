import {ADD_NOTIFICATION, DELETE_NOTIFICATION} from '../actionTypes'

const initialState = {
  notifications: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTIFICATION: 
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      }

    case DELETE_NOTIFICATION: 
      return {
        ...state,
        notifications: state.notifications.filter(notification => notification.id !== action.payload)
      }

    default:
      return state;
  }
}