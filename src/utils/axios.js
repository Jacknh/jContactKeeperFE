import axios from "axios";
import store from '../redux/store';
import {logout} from '../redux/actions'

const instance = axios.create({
  baseURL: "/api",
  timeout: 20 * 1000,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(error)
  }
);

export default instance;