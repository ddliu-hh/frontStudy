<!-- <script>
export default {
  name: 'RegisterIndex'
}
</script> -->
<!-- 
  vue3.3新特性-defineOptions
  这个特性是用来解决不能像vue2那样命名name,components等的问题，因为setup的出现
所以在Vue 3.3中新引入了 defineOptions宏。顾名思义，主要是用来定义Options APl的选项。
可以用defineOptions定义任意的选项, props, emits, expose, slots除外（因为这些可以使用defineXXX来做到）
 -->
<script setup>
defineOptions({
  name: 'RegisterIndex'
})
</script>

<template>
<div>
  我是注册页
</div>
</template>



