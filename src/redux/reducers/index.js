import { combineReducers } from "redux";
import contacts from "./contacts";
import auth from './auth'

export default combineReducers({ contacts, auth });
