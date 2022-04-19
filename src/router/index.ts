/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-19 11:02:03
 * @LastEditTime: 2022-04-19 11:09:28
 * @Description: Modify here please
 */
import {
  createRouter as createVueRouter,
  createMemoryHistory,
  createWebHistory,
  Router
} from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/home/index.vue')
  },
  {
    path: '/user',
    name: 'User',
    meta: {
      title: '用户中心',
      keepAlive: true,
      requireAuth: true
    },
    component: () => import('@/pages/user/index.vue')
  }
]


export const createRouter = (type: 'client' | 'server'): Router => createVueRouter({
  history: type === 'client' ? createWebHistory() : createMemoryHistory(),
  routes
})