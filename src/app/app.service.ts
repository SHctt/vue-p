import axios from 'axios';

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // console.log('axios 请求拦截器', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//响应拦截器
axios.interceptors.response.use(
  (config) => {
    // console.log('axios 响应拦截器', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const appPostsClient = axios.create({
  baseURL: 'http://localhost:3001',
});
