<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<!-- 
  data是一个函数
一个组件的data选项必须是一个函数。→保证每个组件实例，维护独立的一份数据对象。
每次创建新的组件实例，都会新执行一次data函数，得到一个新对象。

 -->
<script>
export default {
  // data() {
  //   console.log('函数执行了')
  //   return {
  //     count: 100,
  //   }
  // },
  data: function () {
    return {
      count: 100,
    }
  },
}
</script>

<style>
.base-count {
  margin: 20px;
}
</style>