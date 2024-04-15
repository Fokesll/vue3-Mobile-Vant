import axios from "axios";

export const apiCore = axios.create({
  baseURL: "url",
  timeout: 10000,
});

apiCore.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiCore.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
