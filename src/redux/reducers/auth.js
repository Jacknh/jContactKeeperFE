import {SET_TOKEN} from '../actionTypes'

const initialState = {
  token: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }

    default:
      return state;
  }
}