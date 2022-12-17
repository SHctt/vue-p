import { RouteRecordRaw } from 'vue-router';
import postIndex from './index/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'postIndex',
    path: '/posts',
    component: postIndex,
  },
];

export default routes;
