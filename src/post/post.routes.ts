import { RouteRecordRaw } from 'vue-router';
import postIndex from './index/index.vue';
import postShow from './show/post-show.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'postIndex',
    path: '/posts',
    component: postIndex,
  },
  {
    name: 'postShow',
    path: '/posts/:postId',
    component: postShow,
  },
];

export default routes;
