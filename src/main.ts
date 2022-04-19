/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-19 10:21:42
 * @LastEditTime: 2022-04-19 10:38:38
 * @Description: Modify here please
 */
import { createSSRApp } from 'vue';
import App from './App.vue';

// 为了保证数据的互不干扰，每次请求需要导出一个新的实例
export const createApp = () => {
  const app = createSSRApp(App);
  return { app };
};
