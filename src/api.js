import axios from "axios";
import history from "./history";
import {AppRoute} from "./const";

const BASE_URL = `https://4.react.pages.academy/wtw`;
const TIMEOUT = 5000;
const ADD_TO_FAVORITE_REQUEST_PATH = `favorite`;

const Error = {
  UNAUTHORIZED: 401
};

export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;
    if (
      response.status === Error.UNAUTHORIZED
      && response.config.url.includes(ADD_TO_FAVORITE_REQUEST_PATH)) {
      history.push(AppRoute.LOGIN);
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
