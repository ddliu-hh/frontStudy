<template>
  <div id="app">
    <BaseOne></BaseOne>
    <BaseTwo></BaseTwo>
  </div>
</template>

<!-- 
  组件的样式冲突scoped
默认情况:写在组件中的样式会全局生效→因此很容易造成多个组件之间的样式冲突问题。
1．全局样式:默认组件中的样式会作用到全局
2．局部样式:可以给组件加上scoped属性,可以让样式只作用于当前组件

 -->
<script>
import BaseOne from './components/BaseOne'
import BaseTwo from './components/BaseTwo'
export default {
  name: 'App',
  components: {
    BaseOne,
    BaseTwo
  }
}
</script>


