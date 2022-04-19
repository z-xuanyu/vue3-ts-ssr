/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-19 10:26:57
 * @LastEditTime: 2022-04-19 11:35:14
 * @Description: Modify here please
 */
const Koa = require('koa');
const path = require('path');
const fs = require('fs');
const vite = require('vite');
const koaConnect = require('koa-connect');

(async () => {
  const app = new Koa();

  // 创建 vite 服务

  const viteServer = await vite.createServer({
    root: process.cwd(),
    logLevel: 'error',
    server: {
      middlewareMode: true,
    },
  });
  // 注册 vite 的 Connect 实例作为中间件（注意：vite.middlewares 是一个 Connect 实例）
  app.use(koaConnect(viteServer.middlewares));

  app.use(async (ctx) => {
    try {
      // 1. 获取index.html
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8',
      );
      // 2. 应用 Vite HTML 转换。这将会注入 Vite HMR 客户端，
      template = await viteServer.transformIndexHtml(ctx.path, template);
      // 3. 加载服务器入口, vite.ssrLoadModule 将自动转换
      const { render } = await viteServer.ssrLoadModule('/src/entry-server.ts');
      //  4. 渲染应用的 HTML
      const { renderedHtml, state, preloadLinks } = await render(ctx, {});

      // 替换标识 <!--app-html--> 为vue模板html
      let html = template
        .replace('<!--app-html-->', renderedHtml)
        .replace('<!--pinia-state-->', state)
        .replace('<!--preload-links-->', preloadLinks);
      ctx.type = 'text/html';
      ctx.body = html;
    } catch (error) {
      viteServer && viteServer.ssrFixStacktrace(error);
      ctx.throw(500, error.stack);
    }
  });

  app.listen(9000, () => {
    console.log('server is listening in 9000');
  });
})();
