<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件
    <!-- 2.父组件对子组件的消息进行监听 -->
    <!-- 监听子组件那边定义的函数类型，然后写一个函数来处理，注意子组件传过来的值已经自动放在这里写的函数里了 -->
    <Son :title="myTitle" @changTitle="handleChange"></Son>
  </div>
</template>

<script>
import Son from './components/Son.vue'
export default {
  name: 'App',
  data() {
    return {
      myTitle: '学前端，就来黑马程序员',
    }
  },
  components: {
    Son,
  },
  methods: {
    // 3.提供处理函数，提供逻辑，newTitle就是传过来的值
    handleChange(newTitle) {
      this.myTitle = newTitle
    },
  },
}
</script>

<style></style>