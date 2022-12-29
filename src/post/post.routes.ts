import { RouteRecordRaw } from 'vue-router';
import PostsIndex from './index/posts-index.vue';

// 创建posts路由
const routes: Array<RouteRecordRaw> = [
  {
    name: 'postsIndex',
    path: '/posts',
    component: PostsIndex,
  },
];

export default routes;
