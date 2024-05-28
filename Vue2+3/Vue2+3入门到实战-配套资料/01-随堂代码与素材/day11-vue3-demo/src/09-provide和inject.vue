<script setup>
import CenterCom from '@/components/center-com.vue'
import { provide, ref } from 'vue'

// 顶层组件向任意的底层组件传递数据和方法，实现跨层组件通信，很方便
// 1.顶层组件通过provide函数提供数据
// 2.底层组件通过inject函数获取数据

// 1. 跨层传递普通数据,键值对
provide('theme-color', 'pink')

// 2. 跨层传递响应式数据
const count = ref(100)
provide('count', count)

setTimeout(() => {
  count.value = 500
}, 2000)

// 3. 跨层传递函数 => 给子孙后代传递可以修改数据的方法
// 谁的数据谁维护，不是你的数据你不能改
provide('changeCount', (newCount) => {
  count.value = newCount
})

</script>

<template>
<div>
  <h1>我是顶层组件</h1>
  <CenterCom></CenterCom>
</div>
</template>



