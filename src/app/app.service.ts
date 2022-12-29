import axios from 'axios';
import { API_BASE_URL } from './app.config';

// 创建并导出客户端，并为客户端增加相关设置
export const appHttpClient = axios.create({
  baseURL: API_BASE_URL,
});
