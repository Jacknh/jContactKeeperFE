import {v4 as uuidv4} from 'uuid'
import { SET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from "../actionTypes";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Jack Zhang",
      email: "jack@gmail.com",
      phone: "123-234-2223",
      type: "personal"
    },
    {
      id: 2,
      name: "Caleb Merritte",
      email: "caleb@gmail.com",
      phone: "345-666-2223",
      type: "personal"
    },
    {
      id: 3,
      name: "Alex Yuan",
      email: "alex@gmail.com",
      phone: "094-234-2334",
      type: "professional"
    }
  ]
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
          {...action.payload, id: uuidv4()}
        ]
      }
    
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }

    default:
      return state;
  }
}
