import Axios, { AxiosRequestConfig } from 'axios';

Axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN_KEY) ?? null;
    const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
    return {
      baseURL: import.meta.env.VITE_API_ENDPOINT,
      ...config,
      headers: {
        ...authHeaders,
        ...config.headers,
      },
    };
  },
  error => Promise.reject(error),
);

Axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);
