import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, UPDATE_CONTACT } from "./actionTypes";

export const addContact = payload => ({ type: ADD_CONTACT, payload });

export const deleteContact = payload => ({type: DELETE_CONTACT, payload});

export const setCurrent = payload => ({type: SET_CURRENT, payload})

export const updateContact = payload => ({type: UPDATE_CONTACT, payload})
