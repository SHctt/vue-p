import { createApp } from 'vue';
import App from './app/app.vue';
import AppRouter from './app/app.router';

// 创建应用
const app = createApp(App);

// 使用路由
app.use(AppRouter);

// 挂载应用
app.mount('#app');
