import axios from "axios";
import history from "./history";

const Error = {
  UNAUTHORIZED: 401
};

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;
    console.log(response);
    if (response.status === Error.UNAUTHORIZED
      && response.config.url !== `/login`
      && !response.config.url.includes(`comments`)) {
      console.log(response);
      history.push(`/login`);
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
