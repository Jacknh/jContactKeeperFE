import { SET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, UPDATE_CONTACT, SET_FILTER } from "../actionTypes";

const initialState = {
  contacts: [],
  current: null,
  filter: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };

    case ADD_CONTACT: 
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {...action.payload}
        ]
      }
    
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact._id !== action.payload)
      }

    case SET_CURRENT: 
      return {
        ...state,
        current: action.payload
      }

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => contact._id === action.payload._id ? action.payload : contact)
      }

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      }

    default:
      return state;
  }
}
