import { RouteRecordRaw } from 'vue-router';
import AppHome from './component/app-home.vue';

// 创建app路由
const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: AppHome,
  },
];

export default routes;
