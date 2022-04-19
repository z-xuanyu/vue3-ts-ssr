/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-19 10:24:44
 * @LastEditTime: 2022-04-19 11:31:46
 * @Description: Modify here please
 */

import { createApp } from './main';
import { createRouter } from './router';
import { setupStore, store } from './store';

const router = createRouter('client');
const { app } = createApp();
app.use(router);
setupStore(app);

// 初始化 pini
// 注意：__INITIAL_STATE__需要在 src/types/shims-global.d.ts中定义
if (window.__INITIAL_STATE__) {
  store.state.value = JSON.parse(window.__INITIAL_STATE__);
}

router.isReady().then(() => {
  app.mount('#app', true);
});
