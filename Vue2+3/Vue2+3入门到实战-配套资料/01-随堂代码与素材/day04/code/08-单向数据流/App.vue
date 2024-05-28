<template>
  <div class="app">
    <BaseCount :count="count" @changeCount="handleChange"></BaseCount>
  </div>
</template>

<!-- 
  prop & data、单向数据流共同点:都可以给组件提供数据。
  区别:
data的数据是自己的→随便改
prop 的数据是外部的→不能直接改，要遵循单向数据流
单向数据流:父级prop 的数据更新，会向下流动，影响子组件。这个数据流动是单向的。

 -->
<script>
import BaseCount from './components/BaseCount.vue'
export default {
  components: {
    BaseCount
  },
  data() {
    return {
      count: 100
    }
  },
  methods: {
    handleChange(newVal) {
      // console.log(newVal);
      this.count = newVal
    }
  }
}
</script>

<style></style>