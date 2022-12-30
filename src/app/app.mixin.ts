import { ComponentOptions, ComponentPublicInstance } from 'vue';
import { APP_NAME } from './app.config';

// 设置标题
const setTitle = (vm: ComponentPublicInstance) => {
  const { title } = vm.$options;

  if (title) {
    let titleContent;

    if (typeof title === 'function') {
      // 设置title
      titleContent = title.call(vm);
    } else {
      titleContent = title;
    }

    document.title = `${titleContent} - ${APP_NAME}`;
  }

  if (vm.$route.path) {
    document.title = APP_NAME;
  }
};

// titleMixin
export const titleMixin: ComponentOptions = {
  created() {
    setTitle(this);
  },

  updated() {
    setTitle(this);
  },
};
