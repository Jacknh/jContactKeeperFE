import { combineReducers } from "redux";
import contacts from "./contacts";
import auth from './auth'
import notification from './notification'

export default combineReducers({ contacts, auth, notification });
