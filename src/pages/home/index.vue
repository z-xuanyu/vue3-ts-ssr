<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-19 11:03:12
 * @LastEditTime: 2022-04-19 15:43:48
 * @Description: Modify here please
-->
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomePage',
});
</script>
<script setup lang="ts">
import { ref } from 'vue';
const msg = ref('首页2121');
</script>

<template>
  <div class="home">{{ msg }}</div>
</template>

<style scoped>
.home {
  font-size: 18px;
  color: red;
}
</style>
