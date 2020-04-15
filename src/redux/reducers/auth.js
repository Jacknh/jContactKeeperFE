import {SET_TOKEN, SET_USER, SET_LOADING} from '../actionTypes'

const initialState = {
  token: null,
  user: null,
  loading: true
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}