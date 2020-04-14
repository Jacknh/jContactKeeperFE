import { v4 as uuidv4 } from "uuid";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
  SET_FILTER,
  SET_TOKEN,
  SET_USER,
  ADD_NOTIFICATION,
  DELETE_NOTIFICATION,
} from "./actionTypes";
import * as authService from "../services/auth";

export const addContact = (payload) => ({ type: ADD_CONTACT, payload });

export const deleteContact = (payload) => ({ type: DELETE_CONTACT, payload });

export const setCurrent = (payload) => ({ type: SET_CURRENT, payload });

export const updateContact = (payload) => ({ type: UPDATE_CONTACT, payload });

export const setFilter = (payload) => ({ type: SET_FILTER, payload });

export const setToken = (payload) => ({ type: SET_TOKEN, payload });

export const setUser = (payload) => ({ type: SET_USER, payload });

export const setNotification = ({ msg, type }) => (dispatch) => {
  const id = uuidv4();
  dispatch({ type: ADD_NOTIFICATION, payload: { msg, type, id } });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: DELETE_NOTIFICATION, payload: id });
      resolve(true);
    }, 3000);
  });
};

export const register = (payload) => (dispatch) =>
  authService
    .register(payload)
    .then(({ data }) => {
      dispatch(setToken(data.token));
      localStorage.setItem("token", data.token);
      return Promise.resolve(true);
    })
    .catch((err) => {
      dispatch(setToken(null));
      localStorage.removeItem("token");
      return Promise.reject(false);
    });

export const getMe = () => (dispatch) =>
  authService
    .getMe()
    .then(({data}) => {
      dispatch(setUser(data.user));
    })
    .catch((error) => {
      console.log(error.response);
      dispatch(setUser(null));
    });
