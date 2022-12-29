import { createRouter, createWebHistory } from 'vue-router';
import appRoutes from '@/app/app.routes';
import postRoutes from '@/post/post.routes';

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: [...appRoutes, ...postRoutes],
});

export default router;
