/* eslint-disable no-param-reassign */
import axios from 'axios';
// import { config } from '../config';
import { StorageService } from '@services';
import Config from 'react-native-config';

export const instance = axios.create({
  baseURL: Config.MAIN_BACKEND_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// TODO: Config nedeed interceptors to check requests & responses
instance.interceptors.request.use(
  async (config) => {
    const token = await StorageService.user.getToken();
    // const token = _.get(session, 'token', false);

    if (token && token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
