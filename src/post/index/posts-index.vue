<template>
  <div>内容列表</div>
</template>

<script>
import { appHttpClient } from '@/app/app.service';

export default {
  async created() {
    // 从服务端获取内容列表数据
    const response = await appHttpClient.get('/posts');

    // 将数据输出到控制台
    console.log(response.data);
  },
};
</script>
