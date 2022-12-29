import { RouteRecordRaw } from 'vue-router';
import PostsIndex from './index/posts-index.vue';
import PostShow from './show/post-show.vue';

// 创建posts路由
const routes: Array<RouteRecordRaw> = [
  {
    name: 'postsIndex',
    path: '/posts',
    component: PostsIndex,
  },
  {
    name: 'postShow',
    path: '/posts/:postId',
    component: PostShow,
    props: true,
  },
];

export default routes;
