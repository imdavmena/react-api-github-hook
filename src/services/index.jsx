import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: `https://api.github.com/`,
});

const isHandlerEnabled = (config = {}) =>
  !(config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled);

const successHandler = (response = {}) => {
  if (isHandlerEnabled(response.config)) {
    if (response.data.success === false) {
      throw response.data;
    }
  }
  return response;
};

const errorHandler = (error = {}) => {
  if (isHandlerEnabled(error.config)) {
    switch (error.response.status) {
      case 404:
      case 500:
      case 502:
      case 503:
        return toast("🚨Ups!, lo sentimos, Ha ocurrido un error.", {
          type: "error",
          autoClose: 3000,
        });
      default:
        throw error.response;
    }
  }
};

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

const getAxiosInstance = () => {
  axiosInstance.defaults.headers.common.Authorization = `AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4`;
  axiosInstance.defaults.headers.common.Accept =
    "application/vnd.github.full+json";
  return axiosInstance;
};

export const GET = async (url, params) => {
  const response = await getAxiosInstance().get(url, params);
  return response.data;
};

export const POST = async (url, params) => {
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

export const PATCH = async (url, data) => {
  const response = await getAxiosInstance().patch(url, data);
  return response.data;
};
