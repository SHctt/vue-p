import axios from 'axios';

// 创建并导出客户端，并为客户端增加相关设置
export const appHttpClient = axios.create({
  baseURL: 'http://localhost:3001',
});
