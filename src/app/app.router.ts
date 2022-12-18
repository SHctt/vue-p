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
    meta: {
      requireAuth: true,
    },
  },
];

// 创建路由
const router = createRouter({ history: createWebHistory(), routes });

/**
 * 导航守卫
 */
// router.beforeEach((to, from, next) => {
//   console.log('现在开始导航守卫');
//   console.log('现在要去的路由地址是', to);
//   console.log('出发的路由地址是', from);

//   if (to.name === 'postIndex') {
//     next('/post-popular');
//   }
//   next();
// });
router.beforeEach((to, from, next) => {
  const reqAuth = to.matched.some((record) => record.meta.requireAuth);
  if (reqAuth) {
    console.log('测试meta验证');
  }
  next();
});

export default router;
