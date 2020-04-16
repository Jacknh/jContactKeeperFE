import { SET_AUTH, SET_USER, SET_LOADING } from "../actionTypes";

const token = localStorage.getItem('token');

const initialState = {
  isAuthenticated: !!token,
  user: null,
  loading: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload,
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