import { v4 as uuidv4 } from "uuid";
import {
  SET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
  SET_FILTER,
  SET_AUTH,
  SET_USER,
  ADD_NOTIFICATION,
  DELETE_NOTIFICATION,
  SET_LOADING
} from "./actionTypes";
import * as authService from "../services/auth";
import * as contactService from "../services/contacts";

export const addContact = (payload) => (dispatch) =>
  contactService.addContact(payload).then(({ data }) => {
    dispatch({ type: ADD_CONTACT, payload: data.data });
  });

export const getContacts = (payload) => (dispatch) => {
  contactService.getContacts(payload).then(({ data }) => {
    dispatch({ type: SET_CONTACTS, payload: data.data });
    dispatch({ type: SET_LOADING, payload: false });
  });
}

export const deleteContact = (payload) => (dispatch) =>
  contactService.deleteContact(payload).then(() => {
    dispatch({ type: DELETE_CONTACT, payload });
  });

export const setCurrent = (payload) => ({ type: SET_CURRENT, payload });

export const updateContact = (id, payload) => (dispatch) =>
  contactService.updateContact(id, payload).then(({ data }) => {
    dispatch({ type: UPDATE_CONTACT, payload: data.data });
  });

export const setFilter = (payload) => ({ type: SET_FILTER, payload });

export const setUser = (payload) => ({ type: SET_USER, payload });

export const setNotification = ({ msg, type }) => (dispatch) => {
  const id = uuidv4();
  dispatch({ type: ADD_NOTIFICATION, payload: { msg, type, id } });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: DELETE_NOTIFICATION, payload: id });
      if (type === "success") {
        resolve(true);
      } else {
        reject(false);
      }
    }, 800);
  });
};

export const register = (payload) => (dispatch) =>
  authService
    .register(payload)
    .then(({ data }) => {
      dispatch({ type: SET_AUTH, payload: true });
      localStorage.setItem("token", data.token);
      return Promise.resolve(true);
    })
    .catch((err) => {
      dispatch({ type: SET_AUTH, payload: false });
      localStorage.removeItem("token");
      return Promise.reject(false);
    });

export const login = (payload) => (dispatch) =>
  authService
    .login(payload)
    .then(({ data }) => {
      dispatch({ type: SET_AUTH, payload: true });
      localStorage.setItem("token", data.token);
      return Promise.resolve(true);
    })
    .catch((err) => {
      dispatch({ type: SET_AUTH, payload: false });
      localStorage.removeItem("token");
      return Promise.reject(false);
    });

export const getMe = () => (dispatch) =>
  authService
    .getMe()
    .then(({ data }) => {
      dispatch(setUser(data.user));
      return Promise.resolve(true);
    })
    .catch((error) => {
      console.log(error.response);
      dispatch(setUser(null));
      return Promise.reject(false);
    });

export const logout = () => (dispatch) => {
  dispatch(setUser(null));
  dispatch({ type: SET_AUTH, payload: false });
  dispatch({ type: SET_CONTACTS, payload: [] });
  dispatch({ type: SET_LOADING, payload: true });
  localStorage.removeItem("token");
};
