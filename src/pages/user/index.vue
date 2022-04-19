<!--
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-04-19 11:03:18
 * @LastEditTime: 2022-04-19 14:44:08
 * @Description: Modify here please
-->
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'UserPage',
});
</script>
<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('用户中心1111121');
</script>

<template>
  <div>{{ msg }}</div>
</template>

<style scoped></style>
