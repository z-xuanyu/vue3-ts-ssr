/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-19 11:23:46
 * @LastEditTime: 2022-04-19 11:25:17
 * @Description: Modify here please
 */
import { defineStore } from 'pinia';
import { store } from '..';

export const useUserStore  = defineStore('user', {
    state: () => {
        return {
            name: 'xuanyu',
            age: 20
        };
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        },
        updateAge(age: number) {
            this.age = age;
        }
    }
});

export function useUserStoreWithOut() {
  return useUserStore(store);
}