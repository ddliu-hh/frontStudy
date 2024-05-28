<template>
  <div>
    <!-- v-model不能直接与父组件传过来的数据进行绑定，要拆解才行 -->
    <select :value="value" @change="selectCity">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select>
  </div>
</template>
<!-- 
  表单类组件封装& v-model简化代码
1.表单类组件封装→实现子组件和父组件数据的双向绑定
父传子:数据应该是父组件 props传递过来的,v-model拆解绑定数据
子传父:监听输入，子传父传值给父组件修改

 -->
<script>
export default {
  props: {
    value: String,
  },
  methods: {
    selectCity(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style></style>