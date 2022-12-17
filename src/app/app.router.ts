import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import postRoutes from '@/post/post.routes';
import Index from './components/index.vue';
import About from './components/about.vue';

// 定义路由
const routes: Array<RouteRecordRaw> = [
  ...postRoutes,
  {
    path: '/',
    component: Index,
  },
  {
    name: 'aboutUs',
    path: '/about-us',
    // redirect: '/about',
    // redirect: { name: 'about' },
    redirect: (to) => {
      console.log(to);
      return '/about';
    },
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
];

// 创建路由
const router = createRouter({ history: createWebHistory(), routes });

export default router;
