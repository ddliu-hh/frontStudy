<template>
  <div class="app">
    我是APP组件
    <button @click="change">修改数据</button>
    <SonA></SonA>
    <SonB></SonB>
  </div>
</template>

<!-- 
  非父子通信(拓展)- provide & inject
  provide & inject 作用:跨层级共享数据。爷爷提供数据，儿子孙子也能用
  使用：
  1.父组件provide提供数据
  2.子/孙组件inject取值使用
 -->

<script>
import SonA from './components/SonA.vue'
import SonB from './components/SonB.vue'
export default {
  provide() {
    return {
      // 简单类型 是非响应式的
      color: this.color,
      // 复杂类型 是响应式的，一般都要用复杂类型
      userInfo: this.userInfo,
    }
  },
  data() {
    return {
      color: 'pink',
      userInfo: {
        name: 'zs',
        age: 18,
      },
    }
  },
  methods: {
    change() {
      this.color = 'red'
      this.userInfo.name = 'ls'
    },
  },
  components: {
    SonA,
    SonB,
  },
}
</script>

<style>
.app {
  border: 3px solid #000;
  border-radius: 6px;
  margin: 10px;
}
</style>

<!-- 
  在 Vue.js 中，数据的响应式是指当数据发生变化时，相关的视图会自动更新。
但有些数据类型是不会触发视图更新的，这种数据类型被称为非响应式数据。

简单类型数据：比如基本类型（例如字符串、数字、布尔值等），它们是非响应式的。
因为 Vue 无法追踪这些简单类型数据的变化。当提供的数据是基本类型时，即使数据发生了变化，视图不会自动更新。

复杂类型数据：指的是引用类型的数据，比如对象或数组等。这些数据是响应式的，因为 Vue 能够追踪引用类型数据内部结构的变化。
当提供的数据是对象或数组时，如果这些数据内部的属性或元素发生变化，相关视图会得到更新。
在代码中，color 是一个简单类型数据（比如字符串），而 userInfo 是一个复杂类型数据（一个包含 name 和 age 属性的对象）。、
因此，color 是非响应式的，而 userInfo 是响应式的。当 color 变化时，不会触发视图更新，但当 userInfo 对象内部的属性发生变化时，视图会相应地更新。
 -->