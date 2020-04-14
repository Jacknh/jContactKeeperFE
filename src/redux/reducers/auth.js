import {SET_TOKEN, SET_USER} from '../actionTypes'

const initialState = {
  token: null,
  user: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}