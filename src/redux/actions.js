import { ADD_CONTACT, DELETE_CONTACT } from "./actionTypes";

export const addContact = payload => ({ type: ADD_CONTACT, payload });

export const deleteContact = payload => ({type: DELETE_CONTACT, payload});
