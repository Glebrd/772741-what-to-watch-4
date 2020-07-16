import axios from "axios";

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
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
