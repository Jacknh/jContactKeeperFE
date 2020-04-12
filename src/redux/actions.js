import { v4 as uuidv4 } from "uuid";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
  SET_FILTER,
  SET_TOKEN,
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

export const setNotification = ({ msg, type }) => (dispatch) => {
  const id = uuidv4();
  dispatch({ type: ADD_NOTIFICATION, payload: { msg, type, id } });
  setTimeout(() => {
    dispatch({ type: DELETE_NOTIFICATION, payload: id });
  }, 3000);
};

export const register = (payload) => (dispatch) =>
  authService
    .register(payload)
    .then(({ data }) => {
      dispatch(setToken(data.token));
      dispatch(setNotification({ msg: "Register succeeded", type: "success" }));
    })
    .catch((err) => {
      dispatch(setToken(null));
      dispatch(setNotification({ msg: "Register failed", type: "danger" }));
    });
