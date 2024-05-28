<template>
  <div class="app">

    <!-- 
      这里用到了三次baseCount，但是每个组件的数据却是独立的，互不影响，这就是data作为函数的好处
     -->
    <baseCount></baseCount>
    <baseCount></baseCount>
    <baseCount></baseCount>
  </div>
</template>

<script>
import baseCount from './components/BaseCount'
export default {
  components: {
    baseCount,
  },
}
</script>

<style></style>


