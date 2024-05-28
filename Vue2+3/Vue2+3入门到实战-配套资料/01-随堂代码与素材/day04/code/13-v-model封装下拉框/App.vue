<template>
  <div class="app">
    <BaseSelect v-model="selectId"></BaseSelect>
  </div>
</template>
<!-- 
  表单类组件封装& v-model简化代码
1.表单类组件封装→实现子组件和父组件数据的双向绑定
父传子:数据应该是父组件 props传递过来的,v-model拆解绑定数据
子传父:监听输入，子传父传值给父组件修改

 -->
<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '102',
    }
  },
  components: {
    BaseSelect,
  },
}
</script>

<style></style>