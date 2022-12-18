import { RouteRecordRaw } from 'vue-router';
import postIndex from './index/index.vue';
import postShow from './show/post-show.vue';
import postMeta from './show/components/post-meta.vue';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'postIndex',
    path: '/posts',
    component: postIndex,
  },
  {
    path: '/post-popular',
    component: postIndex,
    props: {
      sort: 'popular',
    },
  },
  {
    name: 'postShow',
    path: '/posts/:postId',
    component: postShow,
    props: true,
    children: [
      {
        path: 'meta',
        component: postMeta,
      },
    ],
  },
];

export default routes;
