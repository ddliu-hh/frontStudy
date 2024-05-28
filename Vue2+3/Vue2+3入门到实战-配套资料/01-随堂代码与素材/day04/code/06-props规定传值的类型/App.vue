<template>
  <div class="app">
    <BaseProgress :w="width"></BaseProgress>
  </div>
</template>

<!-- 
  props校验
思考:组件的prop可以乱传么?  不可以的
作用:为组件的prop指定验证要求，不符合要求，控制台就会有错误提示→帮助开发者，快速发现错误
在子组件那里设置，父组件这边不需要
 -->
 
<script>
import BaseProgress from './components/BaseProgress.vue'
export default {
  data() {
    return {
      width: 30,
    }
  },
  components: {
    BaseProgress,
  },
}
</script>

<style></style>