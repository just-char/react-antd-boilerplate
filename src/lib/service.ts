import { message } from 'antd';
import axios from 'axios';

export const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});

service.interceptors.request.use((config) => {
  message.loading({ content: 'Loading', key: 'loading' });
  return config;
});

service.interceptors.response.use(
  (response) => {
    message.destroy('loading');
    return response.data;
  },
  (error) => {
    message.destroy('loading');
    message.error('Please try again later');
    return Promise.reject(error);
  },
);
